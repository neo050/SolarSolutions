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
        // /internal/ is noindex and Disallow-ed in robots.txt; listing it in the
        // sitemap too would contradict that and produce "Submitted URL blocked by
        // robots.txt" errors in Search Console.
        !page.includes("/thank-you/") &&
        !page.includes("/404") &&
        !page.includes("/internal/"),
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

  /*
   * Deliberately NOT prefetchAll with a viewport strategy. The header exposes 25 links
   * and the footer 23; on viewport strategy every one of them is fetched as soon as it
   * scrolls into view, which is ~26 speculative page loads per visit — most of the site,
   * downloaded on every page, largely on mobile data.
   *
   * Hover intent is a real signal. Links opt in with data-astro-prefetch.
   */
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },

  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
