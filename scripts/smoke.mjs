// Smoke test: every page in src/data/pages.js must render to HTML without throwing,
// and every router link inside it must point at a route that exists.
import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { createServer } from 'vite'
import { allPages } from '../src/data/pages.js'

const paths = new Set(allPages.map((p) => p.path))
assert.equal(paths.size, allPages.length, 'duplicate route paths')

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  for (const p of allPages) {
    const { default: Page } = await vite.ssrLoadModule(`/src/pages/${p.component}.jsx`)
    const html = renderToString(createElement(MemoryRouter, { initialEntries: [p.path] }, createElement(Page)))
    assert.ok(html.length > 5000, `${p.component} rendered almost nothing`)
    for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
      assert.ok(paths.has(href) || href.startsWith('/images/'), `${p.component} links to unknown route ${href}`)
    }
  }
  console.log(`ok: ${allPages.length} pages render and all internal links resolve`)
} finally {
  await vite.close()
}
