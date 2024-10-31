import { defineConfig } from 'vite'
import path from 'path'

// export default {
// 	root: path.resolve(__dirname, 'src'),
// 	server: {
// 		port: 8080,
// 		hot: true,
// 	},
// };

export default defineConfig({
  // your config options
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        quietDeps: true,
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
})
