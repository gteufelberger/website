// @ts-check
import { defineConfig } from "astro/config";
import { resolve } from "path";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import { BASE, SITE } from "./src/config.ts";

import customEmbeds from "astro-custom-embeds";

import {
  transformerMetaHighlight,
  transformerNotationHighlight,
} from "@shikijs/transformers";

import LinkCardEmbed from "./src/embeds/link-card/embed";
import YoutubeEmbed from "./src/embeds/youtube/embed";
import ExcalidrawEmbed from "./src/embeds/excalidraw/embed";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        $components: resolve("./src/components"),
        $layouts: resolve("./src/layouts"),
        $pages: resolve("./src/pages"),
        $assets: resolve("./src/assets"),
        $content: resolve("./src/content"),
        $lib: resolve("./src/lib"),
        $styles: resolve("./src/styles"),
      },
    },
  },

  integrations: [
    customEmbeds({
      embeds: [ExcalidrawEmbed, YoutubeEmbed, LinkCardEmbed],
    }),
    mdx(),
    sitemap(),
    svelte(),
  ],

  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      transformers: [
        transformerMetaHighlight(),
        transformerNotationHighlight(),
      ],
      wrap: false,
    },

    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },

  prefetch: {
    prefetchAll: true,
  },
  site: SITE,
  base: BASE,
  output: "static",
});
