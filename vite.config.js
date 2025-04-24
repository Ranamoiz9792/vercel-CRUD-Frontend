import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),react()],
    server: {
      proxy: {
        '/api': 'https://vercel-crud-backend-kappa.vercel.app/', // Proxy backend API requests
      },
    },
})
