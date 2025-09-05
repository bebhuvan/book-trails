// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
    mode: 'directory'
  }),
  
  // Performance optimizations
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  
  // SEO improvements
  site: 'https://booktrails.rabbitholes.garden',
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor code for better caching
            vendor: ['astro/jsx-runtime']
          }
        }
      }
    }
  }
});