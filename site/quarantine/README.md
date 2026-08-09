# Quarantine

Images held here are **not published**. This directory sits outside `public/`, so the
build never copies it into `dist/` and nothing here is reachable over the web.

That distinction is the whole point. These files previously lived in
`public/images/_quarantine/`, which *looked* isolated but was not: Astro copies everything
under `public/` verbatim, so the file was being deployed to a live, fetchable URL. Nothing
linked to it, but "unlinked" is not "unpublished" — anyone with the URL, and any crawler
that ever saw it referenced, could retrieve it.

`scripts/qa.mjs` now fails the build if any file from this directory appears in `dist/`, or
if any built page references a quarantined asset. Moving a file back under `public/` to
"just try something" will therefore break the build rather than quietly ship it.

## What is here, and why

### `panel-02.jpeg` — provenance unknown

A sticker on the cabinet below the panel reads:

> חשמלאי מוסמך · רוני בורוכוב · 058-5442623

That is a different electrician's name and phone number. The photograph was serving as the
main hero image on both the homepage and the contracting page, which meant this business's
two most important pages were headed by an image carrying a competitor's contact details.

Held until the owner confirms where the photograph came from. Tracked as
`provenance.panel-02` in the missing-data report, and as a blocker in
[`docs/your-blockers.md`](../../docs/your-blockers.md).

**Do not use it anywhere, in any crop, until that question is answered.** Cropping the
sticker out does not resolve it — if the photograph is not this business's to use, the
crop is not either.

## Releasing something from here

1. Establish provenance in writing.
2. Move the file into the appropriate `public/images/` directory.
3. Update its entry in `src/data/assets.ts`: set `path` and change `status` from
   `QUARANTINED` to whatever is now true.
4. Run `npm run images` for the responsive variants, then `npm run verify`.
