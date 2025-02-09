import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://yollstudentapi.com',
        changeOrigin: true,
        secure: false, 
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  }, 
})
