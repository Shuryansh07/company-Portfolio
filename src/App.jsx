import { lazy, Suspense, useEffect, useRef } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { allPages } from './data/pages.js'
import { caseStudies } from './data/caseStudies.js'
import { enhance } from './lib/enhance.js'

// Every page is its own chunk. Routes come from src/data/pages.js.
const modules = import.meta.glob('./pages/*.jsx')
const routes = allPages.map((p) => ({ path: p.path, Page: lazy(modules[`./pages/${p.component}.jsx`]) }))
routes.push({ path: '/case-studies/:slug', Page: lazy(modules['./pages/CaseStudyDetail.jsx']) })

function Enhanced({ children }) {
  const ref = useRef(null)
  useEffect(() => enhance(ref.current), [])
  return <div ref={ref}>{children}</div>
}

// Search-result snippet and canonical URL for the current route; index.html holds the defaults.
function useSeo(pathname) {
  useEffect(() => {
    const cs = caseStudies.find((c) => `/case-studies/${c.slug}` === pathname)
    const description = cs?.summary ?? allPages.find((p) => p.path === pathname)?.description ?? allPages[0].description
    const url = window.location.origin + pathname
    document.querySelector('meta[name="description"]').content = description
    document.querySelector('meta[property="og:description"]').content = description
    document.querySelector('meta[property="og:url"]').content = url
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
    canonical.href = url
  }, [pathname])
}

function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useSeo(pathname)
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Enhanced key={path}><Page /></Enhanced>} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
