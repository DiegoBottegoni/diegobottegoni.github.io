import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function stripCharset(): Plugin {
  return {
    name: 'strip-charset',
    enforce: 'pre',
    transform(code, id) {
      if (!id.includes('.css') || !/@charset/i.test(code)) return null
      return code.replace(/@charset\s+(['"]).*?\1\s*;/gi, '')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [stripCharset(), react(), tailwindcss()],
})
