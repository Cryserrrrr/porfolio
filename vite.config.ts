import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl()
  ],
  server:
  {
      host: true, // Open to local network and display URL
  },
})
