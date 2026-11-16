import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// WEBFROM_ is exposed so the contact form can read WEBFROM_API_KEY (a public Web3Forms access key).
// SITE_URL (e.g. https://www.example.com, in .env or the host's settings) is the live domain. It replaces
// %SITE_URL% in index.html so social previews and structured data get absolute URLs, and becomes
// __SITE_URL__ in the app for canonical links. scripts/seo-files.mjs reads the same variable for the sitemap.
export default defineConfig(({ mode }) => {
  const site = (process.env.SITE_URL ?? loadEnv(mode, process.cwd(), '').SITE_URL ?? '').replace(/\/+$/, '')
  return {
    plugins: [react(), { name: 'site-url', transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', site) }],
    define: { __SITE_URL__: JSON.stringify(site) },
    envPrefix: ['VITE_', 'WEBFROM_'],
  }
})
