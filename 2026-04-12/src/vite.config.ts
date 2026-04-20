import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: ['slides.yichamao.com'],
  },
  preview: {
    allowedHosts: ['slides.yichamao.com'],
  },
})
