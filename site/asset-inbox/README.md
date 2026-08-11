# Asset inbox

Drop finished generated images here, then run:

```bash
npm run assets:ingest -- --dry   # report only, writes nothing
npm run assets:ingest            # place them for real
```

Name each file after the filename the pack assigned it — the extension does not matter,
because ingest converts to whatever the destination needs. `og-solar.png`, `og-solar.webp`
and `GEN-OG-SOLAR-001.png` all resolve to the same slot.

## What ingest does

For every file it recognises it checks resolution against the spec, checks the aspect
ratio to within 1%, converts to the destination format, writes it to its destination, and
advances the manifest row to `NEEDS VISUAL REVIEW`. The original is kept in `ingested/`
rather than deleted — a generation is not always reproducible, and that file is the only
copy of that particular roll.

Status stops at `NEEDS VISUAL REVIEW` on purpose. A script putting a file in the right
directory is not a review, and `npm run qa` lists everything sitting in that state so it
cannot quietly become permanent.

## What it refuses, and why

**Below the specified resolution.** The slot was sized for that detail; upscaling a
generation throws it away. Regenerate at spec instead.

**Aspect ratio off by more than 1%.** The crop-safe area in each spec — where headline and
buttons sit — was designed around the stated ratio. A different ratio means the layout
crops into the composition, usually through a face or the subject.

**A fact-asserting asset with no references on file.** Three assets depict a real person or
real capacity: the portrait, the team on site, and the solar install. Generating those from
nothing would make the image a claim about the business rather than decoration — an
invented crew size, an invented installation. They may only be generated *from* the owner's
own photographs, so ingest verifies every reference the spec names is actually present and
not itself quarantined before it will accept the result.

**A filename no manifest row claims.** Rather than guessing a destination, ingest reports
it and leaves the file alone.

Nothing is deleted, and `--dry` costs nothing.
