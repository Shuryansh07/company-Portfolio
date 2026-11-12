import { Link } from 'react-router-dom'
import { contact, products, sitePages } from '../data/pages.js'

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
                            <ul className="space-y-2 text-on-surface-variant text-body-sm">
                <li><a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>{contact.email}</a></li>
                <li><a href={`tel:${contact.phone}`} className={linkClass}>{contact.phone}</a></li>
            
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
