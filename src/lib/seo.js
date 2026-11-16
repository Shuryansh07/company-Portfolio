// Head tags for a route. Used in the browser (App.jsx, on navigation) and at build time
// (scripts/prerender.mjs, baked into each page's HTML) so both always agree.
import { allPages } from '../data/pages.js'
import { caseStudies } from '../data/caseStudies.js'

// Every URL that gets its own prerendered HTML file and sitemap entry.
export const routePaths = [...allPages.map((p) => p.path), ...caseStudies.map((c) => `/case-studies/${c.slug}`)]

export const notFound = {
  title: 'Page not found | Horizons',
  description: 'The page you were looking for does not exist. Browse Horizons AI agents, ERP software and case studies instead.',
}

// Returns { title, description, url, noindex }. Unknown paths get the 404 tags, no canonical URL, and noindex.
export function seoFor(rawPath) {
  // Some hosts serve /about/ for dist/about/index.html; it is the same page, canonically /about.
  const pathname = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath
  const origin = __SITE_URL__ || (typeof window !== 'undefined' ? window.location.origin : '')
  const cs = caseStudies.find((c) => `/case-studies/${c.slug}` === pathname)
  if (cs) return { title: `${cs.title} | Horizons`, description: cs.summary, url: origin + pathname, noindex: false }
  const page = allPages.find((p) => p.path === pathname)
  if (page) return { title: page.title, description: page.description, url: origin + pathname, noindex: false }
  return { ...notFound, url: null, noindex: true }
}
