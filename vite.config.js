import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/about',
        '/careers',
        '/contact',
        '/feedback',
        '/info',
        '/projects'
      ]
    })
  ],
  build: {
    outDir: 'dist'
  }
})
