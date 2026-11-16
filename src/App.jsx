import { lazy, Suspense, useEffect, useRef } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { allPages } from './data/pages.js'
import { enhance } from './lib/enhance.js'
import { seoFor } from './lib/seo.js'

// Every page is its own chunk. Routes come from src/data/pages.js.
const modules = import.meta.glob('./pages/*.jsx')
const routes = allPages.map((p) => ({ path: p.path, Page: lazy(modules[`./pages/${p.component}.jsx`]) }))
routes.push({ path: '/case-studies/:slug', Page: lazy(modules['./pages/CaseStudyDetail.jsx']) })
const NotFound = lazy(modules['./pages/NotFound.jsx'])

function Enhanced({ children }) {
  const ref = useRef(null)
  useEffect(() => enhance(ref.current), [])
  return <div ref={ref}>{children}</div>
}

// Keeps the head tags in step with the route after client-side navigation. The prerendered HTML
// already has the right tags for the first page load; both come from src/lib/seo.js.
function useSeo(pathname) {
  useEffect(() => {
    const { title, description, url, noindex } = seoFor(pathname)
    document.title = title
    document.querySelector('meta[property="og:title"]').content = title
    document.querySelector('meta[name="description"]').content = description
    document.querySelector('meta[property="og:description"]').content = description
    document.querySelector('meta[name="robots"]').content = noindex ? 'noindex, follow' : 'index, follow'
    let canonical = document.querySelector('link[rel="canonical"]')
    if (url) {
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
      canonical.href = url
      document.querySelector('meta[property="og:url"]').content = url
    } else canonical?.remove()
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
        <Route path="*" element={<Enhanced key="*"><NotFound /></Enhanced>} />
      </Route>
    </Routes>
  )
}
