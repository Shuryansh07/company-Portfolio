// Server entry: renders one URL of the app to an HTML string. Used by scripts/prerender.mjs
// (after `vite build --ssr`) and by scripts/smoke.mjs (through Vite's dev server).
import { StrictMode } from 'react'
import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export { routePaths, seoFor } from './lib/seo.js'

// prerenderToNodeStream waits for every lazy page chunk, so the HTML holds the full page, not the loading fallback.
// progressiveChunkSize: Infinity keeps big pages inline; otherwise React moves them into a hidden div swapped
// in by inline scripts, which crawlers read poorly and which breaks hydration.
export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
    { progressiveChunkSize: Infinity },
  )
  let html = ''
  for await (const chunk of prelude) html += chunk
  return html
}
