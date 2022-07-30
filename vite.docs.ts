import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue2'

const toPath = (p) => `${path.resolve(__dirname, p)}/`

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'src/',
        replacement: toPath('./src'),
      },
      {
        find: 'docs/',
        replacement: toPath('./docs'),
      },
    ],
  },
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // <--
  })]
})
