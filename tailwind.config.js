import fs from 'node:fs'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

// Design tokens come from the Stitch design system; regenerate with `npm run convert`.
const theme = JSON.parse(fs.readFileSync(new URL('./tailwind.theme.json', import.meta.url), 'utf8'))
// Large type scales with the viewport so phone headings fit; desktop sizes are unchanged from the design.
const fluid = { 'display-lg': ['clamp(34px, 4vw + 22px, 56px)', '1.15'], 'headline-lg': ['clamp(26px, 1.5vw + 20px, 36px)', '1.22'], 'headline-md': ['clamp(21px, 0.6vw + 18px, 24px)', '1.33'] }
for (const [k, [size, lineHeight]] of Object.entries(fluid)) theme.fontSize[k] = [size, { ...theme.fontSize[k][1], lineHeight }]

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: theme },
  plugins: [forms, containerQueries],
}
