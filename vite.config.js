import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Añado el path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuro el alias para mis carpetas
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Añado el alias
    }
  }
})
