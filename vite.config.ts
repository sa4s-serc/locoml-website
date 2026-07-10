import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  base: '/locoml-website/',   // 👈 Add this line

  plugins: [
    react(),
    tailwindcss(),
    svgr()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});