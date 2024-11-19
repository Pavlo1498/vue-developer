import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
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
