import { defineConfig } from 'vite';
import handlebarsPlugin from '@yoichiro/vite-plugin-handlebars';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  define: {
    global: 'window',
  },
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [handlebarsPlugin()],
});
