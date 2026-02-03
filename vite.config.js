import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: base is set to /repo-name/ via VITE_BASE_PATH in the deploy workflow.
// Local dev and preview use base '/' when VITE_BASE_PATH is not set.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    react(),
  ],
})
