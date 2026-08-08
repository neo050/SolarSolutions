// @ts-check
import { defineConfig } from "astro/config";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";

/**
 * RNRG site configuration.
 *
 * Static output on purpose. The single largest structural problem with the previous site
 * was that its only real content page was a client-rendered SPA whose HTML shell carried
 * no copy, so crawlers and link previews saw an empty document. Every route here ships
 * complete HTML.
 */
export default defineConfig({
  site: "https://rnrg.co.il",
  output: "static",
  trailingSlash: "always",

  build: {
    // Emit /electrical/panels/index.html so URLs stay directory-shaped and clean.
    format: "directory",
    inlineStylesheets: "auto",
  },

  integrations: [
    sitemap({
      filter: (page) =>
        // Confirmation pages have no search value and must never be landing pages.
        !page.includes("/thank-you/") && !page.includes("/404"),
      serialize(item) {
        // The three branch hubs and the homepage are the entry points we most want crawled.
        if (/\/(electrical|contracting|solar)\/$/.test(item.url) || item.url === "https://rnrg.co.il/") {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 1.0;
        }
        return item;
      },
    }),
  ],

  image: {
    // sharp handles the AVIF/WebP derivatives; no remote image hosts are used.
    responsiveStyles: true,
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
