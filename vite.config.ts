import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegura que el directorio de salida sea 'dist', que es donde Vercel busca los archivos
    rollupOptions: {
      output: {
        manualChunks: undefined, // Puedes personalizar esto si necesitas separar partes del bundle
      },
    },
  },
});
