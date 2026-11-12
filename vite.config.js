import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// WEBFROM_ is exposed so the contact form can read WEBFROM_API_KEY (a public Web3Forms access key).
export default defineConfig({ plugins: [react()], envPrefix: ['VITE_', 'WEBFROM_'] })
