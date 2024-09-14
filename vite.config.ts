import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ],
  optimizeDeps: {
    exclude: [
      '@jupyterlite/pyodide-kernel-extension',
      '!!raw-loader!@jupyterlab/theme-light-extension/style/variables.css',
      '!!raw-loader!@jupyterlab/theme-dark-extension/style/variables.css',
    ],
  },
  build: {
    rollupOptions: {
      external: [
        '!!raw-loader!@jupyterlab/theme-light-extension/style/variables.css',
        '!!raw-loader!@jupyterlab/theme-dark-extension/style/variables.css',
        '@jupyterlite/pyodide-kernel-extension',
      ],
    },
  },
});