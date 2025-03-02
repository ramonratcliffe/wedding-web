import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "ramonratcliffe/ramonratcliffe.github.io", // Replace with your actual repo name
  build: {
    outDir: "dist",
  },
});
