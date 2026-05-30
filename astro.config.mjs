// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://orbastate.com',
  base: '/blog',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
