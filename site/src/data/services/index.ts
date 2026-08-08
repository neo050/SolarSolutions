import type { ServicePage } from "./types";
import { ELECTRICAL } from "./electrical";
import { CONTRACTING } from "./contracting";
import { SOLAR } from "./solar";

export * from "./types";

/** Every service page on the site, in navigation order. */
export const SERVICE_PAGES: ServicePage[] = [...ELECTRICAL, ...CONTRACTING, ...SOLAR];

const bySlug = new Map(SERVICE_PAGES.map((p) => [p.slug, p]));

export function getService(slug: string): ServicePage {
  const page = bySlug.get(slug);
  if (!page) throw new Error(`No service page defined for "${slug}"`);
  return page;
}

/** Astro's getStaticPaths shape — the route is derived from the slug, so the two cannot drift. */
export function servicePaths() {
  return SERVICE_PAGES.map((page) => ({
    params: { path: page.slug.replace(/^\/|\/$/g, "") },
    props: { page },
  }));
}

export { ELECTRICAL, CONTRACTING, SOLAR };
