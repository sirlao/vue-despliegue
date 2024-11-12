import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ghPages } from 'vite-plugin-gh-pages'

const prueba=0

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), ghPages],
  base: "vue-despliegue"
})
