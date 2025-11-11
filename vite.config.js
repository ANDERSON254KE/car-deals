import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'templates/analytics/chart.js'),
      name: 'Chart',
      fileName: 'chart'
    },
    outDir: 'static/analytics/charts'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './templates')
    }
  }
})
