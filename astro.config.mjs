import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import db from "@astrojs/db";
import netlify from "@astrojs/netlify";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-comments.netlify.app',
  integrations: [mdx(), sitemap(), db(), vue()],
  output: 'server',
  adapter: netlify(),
});