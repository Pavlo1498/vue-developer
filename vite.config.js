import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@pages': path.resolve(__dirname, './src/pages'),
      }
  },
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: '@use "@styles/media.scss" as *;'
        }
    }
},
})
