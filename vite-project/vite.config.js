import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: './',
})
