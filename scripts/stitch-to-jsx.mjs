// Converts the Stitch HTML exports in /stitch into React page components in /src/pages.
// Run with `npm run convert`. It regenerates src/pages/*, tailwind.theme.json and public/images/*,
// so hand edits to generated pages are overwritten: move anything you customise out of src/pages first.
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { parse } from 'parse5'
import postcss from 'postcss'
import { allPages, products } from '../src/data/pages.js'

const ROOT = path.resolve(import.meta.dirname, '..')
const SRC = path.join(ROOT, 'stitch'), OUT = path.join(ROOT, 'src/pages'), IMG = path.join(ROOT, 'public/images')
fs.mkdirSync(OUT, { recursive: true }); fs.mkdirSync(IMG, { recursive: true })

// ---------- theme: one shared Tailwind theme = the majority value of every token ----------
const readConfig = (html) => {
  const m = html.match(/tailwind\.config\s*=\s*(\{[\s\S]*?\})\s*;?\s*<\/script>/)
  return m ? new Function(`return (${m[1]})`)().theme?.extend ?? {} : {} // our own exported files, not user input
}
const htmlOf = Object.fromEntries(allPages.map((p) => [p.key, fs.readFileSync(path.join(SRC, p.key + '.html'), 'utf8')]))
const configs = Object.fromEntries(allPages.map((p) => [p.key, readConfig(htmlOf[p.key])]))
const theme = {}
const groups = new Set(Object.values(configs).flatMap(Object.keys))
for (const g of groups) {
  theme[g] = {}
  const keys = new Set(Object.values(configs).flatMap((c) => Object.keys(c[g] ?? {})))
  for (const k of keys) {
    const tally = {}
    for (const c of Object.values(configs)) if (c[g]?.[k] !== undefined) { const v = JSON.stringify(c[g][k]); tally[v] = (tally[v] ?? 0) + 1 }
    theme[g][k] = JSON.parse(Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0])
  }
}
// Tailwind's own radius scale; pages without a borderRadius block rely on it.
const DEFAULT_RADIUS = { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem' }
theme.borderRadius = { ...DEFAULT_RADIUS, ...theme.borderRadius }
fs.writeFileSync(path.join(ROOT, 'tailwind.theme.json'), JSON.stringify(theme, null, 2) + '\n')

const colorNames = Object.keys(theme.colors ?? {}).sort((a, b) => b.length - a.length)

// A page whose token differs from the shared theme gets that class rewritten to an arbitrary value.
function classRewriter(cfg) {
  const colorFix = {}, radiusFix = {}
  for (const [k, v] of Object.entries(cfg.colors ?? {})) if (theme.colors[k] !== v) colorFix[k] = v
  const pageRadius = { ...DEFAULT_RADIUS, ...cfg.borderRadius }
  for (const k of Object.keys(DEFAULT_RADIUS)) if (pageRadius[k] !== theme.borderRadius[k]) radiusFix[k] = pageRadius[k]
  if (!Object.keys(colorFix).length && !Object.keys(radiusFix).length) return (c) => c
  return (cls) => cls.split(/\s+/).map((tok) => {
    const cut = tok.lastIndexOf(':') + 1, variants = tok.slice(0, cut), base = tok.slice(cut)
    const r = base.match(/^rounded(-(?:[tblrse]|tl|tr|bl|br|ss|se|es|ee))?(?:-(lg|xl))?$/)
    if (r && radiusFix[r[2] ?? 'DEFAULT']) return `${variants}rounded${r[1] ?? ''}-[${radiusFix[r[2] ?? 'DEFAULT']}]`
    const [, body, alpha = ''] = base.match(/^(.*?)(\/[^/]+)?$/)
    const name = colorNames.find((n) => body.endsWith('-' + n))
    if (name && colorFix[name]) return `${variants}${body.slice(0, -name.length)}[${colorFix[name]}]${alpha}`
    return tok
  }).join(' ')
}

// ---------- links ----------
const norm = (s) => s.replace(/\s+/g, ' ').trim().toLowerCase()
const productFor = (text) => {
  const t = norm(text)
  if (!t || t.length > 90) return null
  let best = null
  for (const p of products) for (const a of p.aliases) if (t.includes(a) && (!best || a.length > best.a.length)) best = { a, p }
  return best?.p ?? null
}
const ROUTE_WORDS = [
  ['/case-studies', /case stud/],
  ['/careers', /career|open (position|role)|we.re hiring/],
  ['/products', /product|package|catalog|module/],
  ['/contact', /demo|scop|contact|talk|quote|consult|proposal|walk-?through|get started|sow|blueprint|spec sheet|brochure/],
  ['/solutions', /solution|service/],
  ['/about', /about|why horizon/],
]
const routeFor = (text) => { const t = norm(text); return t.length > 60 ? null : ROUTE_WORDS.find(([, re]) => re.test(t))?.[0] ?? null }

// ---------- tiny DOM helpers over parse5 ----------
const isEl = (n) => !!n.tagName
const textOf = (n) => (n.nodeName === '#text' ? n.value : (n.childNodes ?? []).map(textOf).join(''))
const attr = (n, name) => n.attrs?.find((a) => a.name === name)?.value
const walk = (n, fn) => { fn(n); for (const c of n.childNodes ?? []) walk(c, fn) }
const find = (n, pred) => { let hit = null; walk(n, (x) => { if (!hit && isEl(x) && pred(x)) hit = x }); return hit }
const hasAncestor = (n, tag) => { for (let p = n.parentNode; p; p = p.parentNode) if (p.tagName === tag) return true; return false }
const remove = (n) => { n.parentNode.childNodes.splice(n.parentNode.childNodes.indexOf(n), 1) }

// ---------- JSX serialiser ----------
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])
const INLINE = new Set(['a', 'span', 'b', 'strong', 'em', 'i', 'code', 'button', 'img', 'input', 'label', 'small', 'svg', 'u', 'sup', 'sub', 'select', 'textarea', 'abbr', 'kbd', 'mark', 'time', 'Link'])
const RENAME = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength', minlength: 'minLength',
  colspan: 'colSpan', rowspan: 'rowSpan', srcset: 'srcSet', crossorigin: 'crossOrigin', autocomplete: 'autoComplete', autofocus: 'autoFocus',
  autoplay: 'autoPlay', playsinline: 'playsInline', frameborder: 'frameBorder', allowfullscreen: 'allowFullScreen', novalidate: 'noValidate',
  datetime: 'dateTime', enctype: 'encType', contenteditable: 'contentEditable', spellcheck: 'spellCheck', referrerpolicy: 'referrerPolicy',
  inputmode: 'inputMode', 'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink', value: 'defaultValue', checked: 'defaultChecked',
}
const BOOL = new Set(['disabled', 'defaultChecked', 'required', 'readOnly', 'multiple', 'open', 'hidden', 'autoFocus', 'autoPlay', 'controls', 'loop', 'muted', 'playsInline', 'allowFullScreen', 'noValidate'])
const camel = (s) => s.replace(/[-:]([a-z])/g, (_, c) => c.toUpperCase())
const lit = (v) => (/["&\n{}\\]/.test(v) ? `{${JSON.stringify(v)}}` : `"${v}"`)

function styleObject(css) {
  const out = {}; let depth = 0, cur = ''
  const flush = () => { const i = cur.indexOf(':'); if (i > 0) { const k = cur.slice(0, i).trim(); out[k.startsWith('--') ? k : camel(k)] = cur.slice(i + 1).trim() } cur = '' }
  for (const ch of css) { if (ch === '(') depth++; if (ch === ')') depth--; if (ch === ';' && depth === 0) flush(); else cur += ch }
  flush(); return out
}

function serialise(node, ctx, depth = 0, pre = false) {
  const pad = '  '.repeat(depth)
  if (node.nodeName === '#text') {
    if (pre) return node.value ? `${pad}{${JSON.stringify(node.value)}}\n` : ''
    const t = node.value.replace(/\s+/g, ' ')
    const sib = node.parentNode.childNodes, i = sib.indexOf(node)
    const inlineNear = [sib[i - 1], sib[i + 1]].some((s) => s && (s.nodeName === '#text' || INLINE.has(s.tagName)))
    if (t === ' ') return inlineNear && sib[i - 1] && sib[i + 1] ? `${pad}{' '}\n` : ''
    if (!t) return ''
    const core = t.trim(), body = /[{}<>&]/.test(core) ? `{${JSON.stringify(core)}}` : core
    return `${t.startsWith(' ') && sib[i - 1] ? `${pad}{' '}\n` : ''}${pad}${body}\n${t.endsWith(' ') && sib[i + 1] ? `${pad}{' '}\n` : ''}`
  }
  if (!isEl(node) || ['script', 'style', 'link', 'meta', 'title', 'noscript', 'template'].includes(node.tagName)) return ''

  let tag = node.tagName
  const props = []
  for (const a of node.attrs) {
    const raw = a.prefix ? `${a.prefix}:${a.name}` : a.name
    if (/^on[a-z]+$/.test(raw)) continue
    if (raw === 'selected') continue // handled on the parent <select>
    let name = RENAME[raw] ?? (/^(data|aria)-/.test(raw) ? raw : /[-:]/.test(raw) ? camel(raw) : raw)
    if (name === 'defaultValue' && !['input', 'textarea', 'select'].includes(tag)) name = 'value'
    let value = a.value
    if (name === 'className') value = ctx.fixClass(value)
    if (name === 'style') { props.push(`style={${JSON.stringify(styleObject(value))}}`); continue }
    if (name === 'src' && ctx.images[value]) value = ctx.images[value]
    if (BOOL.has(name) && (value === '' || value === raw)) { props.push(name); continue }
    props.push(`${name}=${lit(value)}`)
  }
  if (tag === 'select') {
    const sel = find(node, (o) => o.tagName === 'option' && o.attrs.some((a) => a.name === 'selected'))
    if (sel) props.push(`defaultValue=${lit(attr(sel, 'value') ?? textOf(sel).trim())}`)
  }
  if (tag === 'form') props.push('onSubmit={(e) => e.preventDefault()}')
  if (node.linkTo) { // set by wireLinks()
    tag = 'Link'; ctx.usesLink = true
    const keep = props.filter((p) => !/^(href|type|to)=/.test(p))
    props.length = 0; props.push(`to="${node.linkTo}"`, ...keep)
  }
  if (tag === 'textarea') { const v = textOf(node); if (v.trim()) props.push(`defaultValue=${lit(v)}`); return `${pad}<textarea ${props.join(' ')} />\n` }

  const open = `${pad}<${tag}${props.length ? ' ' + props.join(' ') : ''}`
  if (VOID.has(tag)) return `${open} />\n`
  const kids = node.childNodes.map((c) => serialise(c, ctx, depth + 1, pre || tag === 'pre')).join('')
  if (!kids.trim()) return `${open} />\n`
  return `${open}>\n${kids}${pad}</${tag}>\n`
}

// Turn dead "#" links, call-to-action buttons and product cards into router links.
function wireLinks(body) {
  const ids = new Set(); walk(body, (n) => { const id = isEl(n) && attr(n, 'id'); if (id) ids.add(id) })
  walk(body, (n) => {
    if (!isEl(n)) return
    const text = textOf(n)
    if (n.tagName === 'a') {
      const href = attr(n, 'href') ?? '#'
      if (!href.startsWith('#')) return // mailto:, tel:, external
      let card = null
      for (let p = n.parentNode, i = 0; p && i < 4 && !card; p = p.parentNode, i++) { const h = isEl(p) && find(p, (x) => /^h[2-5]$/.test(x.tagName)); if (h) card = productFor(textOf(h)) }
      const product = productFor(text) ?? (/learn more|view product|explore|details/i.test(text) ? card : null)
      const to = product?.path ?? routeFor(text)
      if (to) n.linkTo = to
      else if (href.length > 1 && !ids.has(href.slice(1))) n.attrs.find((a) => a.name === 'href').value = '#'
    } else if (n.tagName === 'button') {
      if (hasAncestor(n, 'form') || attr(n, 'data-filter') || attr(n, 'aria-expanded') || text.includes('?') || norm(text).length > 40) return
      const to = /^\/(contact|products)$/.test(routeFor(text) ?? '') ? routeFor(text) : null
      if (to && !/subscribe|submit|apply|join|send/i.test(text)) n.linkTo = to
    } else if (n.tagName === 'article' && !find(n, (x) => x !== n && ['a', 'button'].includes(x.tagName))) {
      const h = find(n, (x) => /^h[2-5]$/.test(x.tagName)); const p = h && productFor(textOf(h))
      if (p) n.linkTo = p.path
    }
  })
}

// Prefix every selector of a page's own <style> so it cannot leak into other pages.
function scopeCss(css, scope) {
  const root = postcss.parse(css)
  root.walkRules((rule) => {
    if (rule.parent.type === 'atrule' && /keyframes/.test(rule.parent.name)) return
    rule.selectors = rule.selectors.map((s) => (/^(html|body|:root)\b/.test(s) ? s.replace(/^(html|body|:root)/, scope) : `${scope} ${s}`))
  })
  return root.toString()
}

async function download(url, name) {
  const existing = fs.readdirSync(IMG).find((f) => f.startsWith(name + '.'))
  if (existing) return '/images/' + existing
  try {
    const res = await fetch(url); if (!res.ok) throw new Error(res.status)
    if (!res.headers.get('content-type')?.startsWith('image/')) throw new Error('not an image') // some Stitch URLs answer with a sign-in page
    const ext = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp', 'image/svg+xml': 'svg', 'image/gif': 'gif' }[res.headers.get('content-type')?.split(';')[0]] ?? 'png'
    fs.writeFileSync(path.join(IMG, `${name}.${ext}`), Buffer.from(await res.arrayBuffer()))
    return `/images/${name}.${ext}`
  } catch (e) { console.warn(`  image kept remote (${e.message}): ${url.slice(0, 70)}`); return url }
}

// ---------- main ----------
for (const page of allPages) {
  const html = htmlOf[page.key]
  const doc = parse(html)
  const body = find(doc, (n) => n.tagName === 'body')
  const scope = '.pg-' + page.component.replace(/[A-Z]/g, (c, i) => (i ? '-' : '') + c.toLowerCase())

  // The site header and footer are shared React components, so drop each page's own copy.
  const header = find(body, (n) => n.tagName === 'header' || n.tagName === 'nav')
  const headerClass = attr(header, 'class') ?? ''
  remove(header)
  let footer = null; walk(body, (n) => { if (n.tagName === 'footer') footer = n }); if (footer) remove(footer)

  wireLinks(body)

  const images = {}
  const srcs = []; walk(body, (n) => { if (n.tagName === 'img' && /^https?:/.test(attr(n, 'src') ?? '')) srcs.push(attr(n, 'src')) })
  for (const s of srcs) images[s] = await download(s, crypto.createHash('md5').update(s).digest('hex').slice(0, 10))

  const ctx = { fixClass: classRewriter(configs[page.key]), images, usesLink: false }
  const inner = body.childNodes.map((c) => serialise(c, ctx, 3)).join('')
  // Pages designed around a fixed header already reserve space for it; the shared header is in flow.
  const rootClass = [scope.slice(1), ctx.fixClass(attr(body, 'class') ?? ''), /\bfixed\b/.test(headerClass) ? '-mt-20' : ''].filter(Boolean).join(' ')
  const title = (html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? page.name ?? page.label).replace(/&amp;/g, '&').trim()
  const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n')

  fs.writeFileSync(path.join(OUT, page.component + '.css'), `/* Generated from stitch/${page.key}.html. Scoped to this page. */\n${scopeCss(css, scope)}\n`)
  fs.writeFileSync(path.join(OUT, page.component + '.jsx'), `// Generated from stitch/${page.key}.html by scripts/stitch-to-jsx.mjs (npm run convert).
${ctx.usesLink ? "import { Link } from 'react-router-dom'\n" : ''}import './${page.component}.css'

export default function ${page.component}() {
  return (
    <div className=${lit(rootClass)}>
      <title>{${JSON.stringify(title)}}</title>
${inner}    </div>
  )
}
`)
  console.log(`${page.component.padEnd(28)} ${page.path}`)
}
console.log(`${allPages.length} pages written to src/pages`)
