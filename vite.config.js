import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Usa base normal en desarrollo, y el repo en producción
  base: process.env.NODE_ENV === 'production' 
    ? '/Virtual-Sabana-Demo/' 
    : '/',
})
