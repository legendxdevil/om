import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    hmr: {
      // Disable WebSocket for more stable connections
      protocol: 'ws',
      host: 'localhost',
    },
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
    // Improve build performance
    target: 'es2015',
    cssTarget: 'chrome80',
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['gsap', '@studio-freight/lenis'],
  },
});