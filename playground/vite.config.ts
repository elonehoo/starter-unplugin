import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Unplugin from 'starter-unplugin/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    Unplugin(),
  ],
})
