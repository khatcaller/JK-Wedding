import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['jkgreer.com', 'www.jkgreer.com'],
  },
  preview: {
    allowedHosts: ['jkgreer.com', 'www.jkgreer.com'],
  },
})
