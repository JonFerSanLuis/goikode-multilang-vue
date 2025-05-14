import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/goikode-multilang-vue/', 
  publicPath: '/goikode-multilang-vue/',
  plugins: [vue()]
})
