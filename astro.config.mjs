// astro.config.mjs - Without sitemap integration
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://baliproject.vercel.app',
  
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ],

  output: 'static',
  adapter: vercel(),
  
  vite: {
    build: {
      rollupOptions: {
        external: ['googleapis']
      }
    }
  }
});