// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    routes: {
      exclude: [
        "/favicon.ico",
        "/favicon.svg", 
        "/icon.svg",
        "/manifest.json",
        "/og-image.png",
        "/sw.js"
      ]
    }
  }),
  
  // Performance optimizations
  build: {
    inlineStylesheets: 'always',
    assets: 'assets', // Rename _astro to assets to avoid conflicts
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