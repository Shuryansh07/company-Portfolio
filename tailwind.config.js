import fs from 'node:fs'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

// Design tokens come from the Stitch design system; regenerate with `npm run convert`.
const theme = JSON.parse(fs.readFileSync(new URL('./tailwind.theme.json', import.meta.url), 'utf8'))

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: theme },
  plugins: [forms, containerQueries],
}
