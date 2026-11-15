// Writes dist/robots.txt and dist/sitemap.xml after `vite build`, from the same route list the app uses.
// Search engines need absolute URLs, so the live domain comes from SITE_URL (in .env or the host's settings).
import fs from 'node:fs'
import path from 'node:path'
import { allPages } from '../src/data/pages.js'
import { caseStudies } from '../src/data/caseStudies.js'

const DIST = path.resolve(import.meta.dirname, '../dist')
const env = fs.existsSync('.env') ? Object.fromEntries(fs.readFileSync('.env', 'utf8').split(/\r?\n/).map((l) => l.match(/^\s*([\w.]+)\s*=\s*(.*?)\s*$/)?.slice(1)).filter(Boolean)) : {}
const site = (process.env.SITE_URL ?? env.SITE_URL ?? '').replace(/\/+$/, '')

if (!/^https?:\/\/[^/]+$/.test(site)) {
  fs.writeFileSync(path.join(DIST, 'robots.txt'), 'User-agent: *\nAllow: /\n')
  console.warn('seo-files: SITE_URL is not set (e.g. SITE_URL=https://www.example.com), so sitemap.xml was skipped.')
} else {
  const paths = [...allPages.map((p) => p.path), ...caseStudies.map((c) => `/case-studies/${c.slug}`)]
  const today = new Date().toISOString().slice(0, 10)
  const urls = paths.map((p) => `  <url><loc>${site}${p}</loc><lastmod>${today}</lastmod><priority>${p === '/' ? '1.0' : p.split('/').length > 2 ? '0.7' : '0.8'}</priority></url>`)
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`)
  fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)
  console.log(`seo-files: sitemap.xml with ${urls.length} URLs for ${site}`)
}
