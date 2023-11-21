import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server : {
//     // host : true,
//     // strictPort : false,
//     // port : 3000,
//     proxy : {
//       '/api': {
//         target: 'http://localhost:5100/api',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     }
//   }
// })

export default defineConfig({
  plugins: [react()],
  server: {
    host : true,
    strictPort : true,
    port : 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5001/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});