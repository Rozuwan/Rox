import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Rox/',  
  plugins: [
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        dmca: 'dmca.html',
      },
    },
  },
})