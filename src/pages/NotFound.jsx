// Shown for any URL that isn't a real route. Prerendered to dist/404.html, which static hosts
// serve with a 404 status, so search engines drop dead links instead of indexing them as the homepage.
import { Link } from 'react-router-dom'
import { sitePages } from '../data/pages.js'

const suggestions = sitePages.filter((p) => ['/products', '/solutions', '/case-studies'].includes(p.path))

export default function NotFound() {
  return (
    <div className="bg-background text-on-surface antialiased min-h-[70vh] flex items-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-b from-primary-container/10 via-primary-fixed/20 to-transparent blur-3xl opacity-70" />
      </div>
      <section className="relative z-10 max-w-2xl mx-auto px-4 md:px-8 py-24 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary-fixed/40 border border-outline-variant/40 text-on-primary-container font-label-md text-label-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>Error 404</span>
        </div>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg font-bold text-on-surface tracking-tight">
          This page doesn't exist
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          The link may be old or mistyped. Here are some places to pick up from.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link to="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-label-md text-white bg-gradient-to-r from-[#ff7555] to-[#ff9e7a] hover:opacity-95 transition-all duration-200 active:scale-95 glow-peach shadow-sm">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">home</span>
            <span>Back to home</span>
          </Link>
          {suggestions.map((p) => (
            <Link key={p.path} to={p.path} className="inline-flex items-center px-5 py-3 rounded-[10px] text-label-md text-on-surface bg-surface border border-outline-variant/60 hover:text-primary transition-colors duration-200">
              {p.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
