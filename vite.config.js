import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      '.js': 'text/javascript'
    }
  },
  resolve: {
    alias: {
      '~': `${__dirname}/node_modules/`
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~slick-carousel/slick/slick.css"; @import "~slick-carousel/slick/slick-theme.css";`
      }
    }
  }
})