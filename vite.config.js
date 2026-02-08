import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base so built assets work on GitHub Pages and subpaths
export default defineConfig({
  base: './',
  plugins: [react()]
})
