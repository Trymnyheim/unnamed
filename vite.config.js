import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  base: '/unnamed/',
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html')
      }
    }
  }
}
