import type { Track } from "../business";

export interface Bullet {
  title: string;
  text: string;
}

export interface Step {
  title: string;
  text: string;
}

export type ServiceSection =
  | { kind: "prose"; id: string; title: string; body: string[]; note?: string }
  | { kind: "bullets"; id: string; title: string; intro?: string; items: Bullet[] }
  | { kind: "steps"; id: string; title: string; intro?: string; items: Step[] }
  | { kind: "audience"; id: string; title: string; intro?: string; items: Bullet[] }
  | { kind: "gallery"; id: string; title: string; intro?: string; images: { src: string; alt: string }[] }
  /** A verified reference table from src/data/regulatory.ts. */
  | {
      kind: "data-table";
      id: string;
      title: string;
      intro?: string;
      variant: "licence" | "inspection";
    }
  /** A block whose content is genuinely unknown. Renders the honest empty state. */
  | { kind: "pending"; id: string; title: string; gapId: string; explain: string };

export interface ServicePage {
  /** Route, with leading and trailing slash. */
  slug: string;
  track: Track;
  parent?: { label: string; href: string };
  eyebrow: string;
  h1: string;
  /** <title> — keep under ~60 characters before the brand suffix. */
  title: string;
  /** <meta name="description"> — keep under ~155 characters. */
  description: string;
  lede: string;
  heroPoints: string[];
  heroImage?: { src: string; alt: string };
  sections: ServiceSection[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
}
