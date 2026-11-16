// Prerenders every route to static HTML after `vite build` and `vite build --ssr src/entry-server.jsx`.
// Each URL gets dist/<path>/index.html with the page content and its own title, description and canonical
// already in the HTML, so search engines and link previews see the real page without running JavaScript.
// dist/404.html is the not-found page; static hosts (Netlify, Vercel, Cloudflare Pages, GitHub Pages)
// serve it with a 404 status for unknown URLs. The browser then hydrates the HTML (src/main.jsx).
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(import.meta.dirname, '..')
const DIST = path.join(ROOT, 'dist')
const SSR = path.join(ROOT, 'dist-ssr')
const { render, routePaths, seoFor } = await import(pathToFileURL(path.join(SSR, 'entry-server.js')).href)

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function setTag(html, pattern, replacement) {
  if (typeof pattern === 'string' ? !html.includes(pattern) : !pattern.test(html)) throw new Error(`prerender: index.html is missing ${pattern}`)
  return html.replace(pattern, replacement)
}

async function page(url) {
  const { title, description, url: canonical, noindex } = seoFor(url)
  let html = template
  html = setTag(html, /<title>[\s\S]*?<\/title>/, () => `<title>${esc(title)}</title>`)
  html = setTag(html, /(<meta name="description" content=")[^"]*/, (_, a) => a + esc(description))
  html = setTag(html, /(<meta property="og:title" content=")[^"]*/, (_, a) => a + esc(title))
  html = setTag(html, /(<meta property="og:description" content=")[^"]*/, (_, a) => a + esc(description))
  html = setTag(html, /(<meta name="robots" content=")[^"]*/, (_, a) => a + (noindex ? 'noindex, follow' : 'index, follow'))
  if (canonical) {
    html = setTag(html, /(<meta property="og:url" content=")[^"]*/, (_, a) => a + esc(canonical))
    html = setTag(html, /(<link rel="canonical" href=")[^"]*/, (_, a) => a + esc(canonical))
  } else {
    html = setTag(html, /\s*<link rel="canonical"[^>]*>/, '')
  }
  // React puts resource hints (image preloads) at the start of its output. Inside #root they break
  // hydration, so they move to <head>, where they still speed up loading.
  const rendered = await render(url)
  const hints = rendered.match(/^(?:<link [^>]*>)*/)[0]
  const body = rendered.slice(hints.length)
  if (body.includes('<!--$?-->')) throw new Error(`prerender: ${url} still has a loading placeholder instead of its content`)
  html = setTag(html, '</head>', () => `${hints}</head>`)
  return setTag(html, '<div id="root"></div>', () => `<div id="root">${body}</div>`) // function: page text may contain "$"
}

for (const url of routePaths) {
  const file = url === '/' ? path.join(DIST, 'index.html') : path.join(DIST, url.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, await page(url))
}
fs.writeFileSync(path.join(DIST, '404.html'), await page('/404'))
fs.rmSync(SSR, { recursive: true, force: true })
console.log(`prerender: ${routePaths.length} pages + 404.html`)
