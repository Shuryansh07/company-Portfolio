// Smoke test: every route renders through the real app (src/entry-server.jsx, the same path the prerender uses)
// without throwing, every router link points at a route that exists, and every page has its own title.
// Everything React-related loads inside Vite's module graph, so there is only one copy of React
// (importing react-dom here directly can load a second copy on Windows, where c:\ and C:\ differ).
import assert from 'node:assert/strict'
import { createServer } from 'vite'

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { render, routePaths, seoFor } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const paths = new Set(routePaths)
  assert.equal(paths.size, routePaths.length, 'duplicate route paths')

  const titles = new Set()
  for (const p of routePaths) {
    const html = await render(p)
    assert.ok(html.length > 5000, `${p} rendered almost nothing`)
    assert.ok(!html.includes('<title'), `${p} renders its own <title>; titles belong in src/data/pages.js`)
    for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
      assert.ok(paths.has(href) || href.startsWith('/images/'), `${p} links to unknown route ${href}`)
    }
    const seo = seoFor(p)
    assert.ok(seo.title && !seo.noindex, `${p} has no title or is marked noindex`)
    assert.ok(!titles.has(seo.title), `${p} reuses the title "${seo.title}"`)
    titles.add(seo.title)
  }

  assert.deepEqual(seoFor('/about/'), seoFor('/about'), 'a trailing slash must not change the page tags')

  for (const p of ['/no-such-page', '/case-studies/no-such-study']) {
    assert.match(await render(p), /This page doesn&#x27;t exist/, `${p} should render the 404 page`)
    assert.equal(seoFor(p).noindex, true, `${p} should be noindex`)
  }
  console.log(`ok: ${routePaths.length} pages render with unique titles, internal links resolve, unknown URLs show the 404 page`)
} finally {
  await vite.close()
}
