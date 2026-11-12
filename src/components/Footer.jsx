import { Link } from 'react-router-dom'
import { products, sitePages } from '../data/pages.js'

const bySlug = (slug) => products.find((p) => p.slug === slug)
const columns = [
  { title: 'AI Agents', links: ['ai-qc-agent', 'ai-travel-agent', 'exhibition-lead-intelligence'].map(bySlug) },
  { title: 'Popular packages', links: ['integrated-erp', 'sales-crm', 'inventory-control', 'business-accounting', 'hr-management'].map(bySlug) },
  { title: 'Company', links: sitePages.filter((p) => p.path !== '/').map((p) => ({ path: p.path, name: p.label })) },
]
const linkClass = 'text-on-surface-variant hover:text-primary transition-colors'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 mt-20 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-outline-variant/20">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/images/logo.jpg" alt="" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-headline-md font-bold text-on-surface">Horizon</span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-md">
              AI automation and ERP solutions delivered as fixed-scope, fixed-price packages, plus custom engagements when a package is not the right fit.
            </p>
            <form className="pt-2 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="block text-label-sm text-on-surface mb-2 font-semibold">Product updates by email</label>
              <div className="flex items-center p-1 rounded-[10px] neo-glass border border-outline-variant/40 focus-within:border-primary-container">
                <input id="newsletter-email" type="email" required placeholder="Enter your business email" className="w-full px-4 text-body-sm bg-transparent outline-none border-none focus:ring-0 text-on-surface placeholder:text-outline" />
                <button type="submit" className="px-5 py-2 rounded-[10px] bg-primary-container text-white text-label-sm font-semibold hover:bg-primary transition-colors flex-shrink-0">Subscribe</button>
              </div>
            </form>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-label-sm">
            {columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <div className="font-bold text-on-surface uppercase tracking-wider text-xs">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.path}><Link to={l.path} className={linkClass}>{l.name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-3">
              <div className="font-bold text-on-surface uppercase tracking-wider text-xs">Connect</div>
              {/* Placeholders: replace with the real company details. */}
              <ul className="space-y-2 text-on-surface-variant text-body-sm">
                <li>[contact email]</li>
                <li>[phone]</li>
                <li className="text-xs">[Office address]</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-label-sm text-on-surface-variant">
          <div>© {new Date().getFullYear()} Horizon. All rights reserved.</div>
          <Link to="/products" className={linkClass}>All products</Link>
        </div>
      </div>
    </footer>
  )
}
