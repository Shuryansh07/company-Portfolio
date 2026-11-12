import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { sitePages } from '../data/pages.js'

const links = sitePages.filter((p) => p.path !== '/')
const linkClass = ({ isActive }) =>
  `transition-colors duration-200 hover:text-primary ${isActive ? 'text-primary font-semibold' : 'text-on-surface-variant font-medium'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-4 inset-x-0 mx-auto w-11/12 max-w-7xl rounded-[14px] z-50 bg-surface/80 backdrop-blur-xl border border-surface-container-lowest/80 shadow-lg shadow-on-background/5">
      <div className="flex justify-between items-center px-6 py-3 w-full">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/images/logo.jpg" alt="" className="w-9 h-9 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-200" />
          <span className="text-headline-sm font-bold text-on-surface tracking-tight">Horizon</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-label-md" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.path} to={l.path} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-label-md text-white bg-gradient-to-r from-[#ff7555] to-[#ff9e7a] hover:opacity-95 transition-all duration-200 active:scale-95 glow-peach shadow-sm">
            <span>Book a free demo</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
          </Link>
          <button type="button" className="md:hidden p-2 rounded-[10px] text-on-surface" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="material-symbols-outlined" aria-hidden="true">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 text-label-lg" aria-label="Mobile">
          {links.map((l) => (
            <NavLink key={l.path} to={l.path} className={(s) => `${linkClass(s)} py-2`}>{l.label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
