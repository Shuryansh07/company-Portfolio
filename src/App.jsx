import { lazy, Suspense, useEffect, useRef } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { allPages } from './data/pages.js'
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

function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
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
