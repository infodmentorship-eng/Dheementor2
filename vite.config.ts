import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Local development only; production requests use VITE_API_BASE_URL directly.
  server: { proxy: { '/api': 'http://localhost:3001' } },
})
