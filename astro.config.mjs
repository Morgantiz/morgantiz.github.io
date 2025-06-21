import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://morgantiz.github.io",
  integrations: [sentry(), spotlightjs(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});