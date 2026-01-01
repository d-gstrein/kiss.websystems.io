import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kiss.websystems.io',
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: 'assets'
  }
});
