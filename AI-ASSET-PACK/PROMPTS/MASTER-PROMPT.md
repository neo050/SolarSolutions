# Master AI Asset Generation Prompt

העלה למודל את כל אלה יחד, ואז הדבק את ההוראה שלמטה:

1. את התיקייה `SOURCE-ASSETS/` במלואה
2. `MANIFEST/asset-manifest.json`
3. `STYLE-GUIDE/style-guide.md`
4. `PROMPTS/prompt-pack.md`

---

## ההוראה

You are producing a batch of photographic assets for RNRG, an Israeli electrical
contracting and solar business. Work through the manifest systematically. Do not skip
entries and do not reorder them.

**Read the manifest first.** `asset-manifest.json` has two arrays. `source` is the
photographs that already exist — these are your reference material. `generate` is what
you are producing. Each generate entry names the exact `references` it must be built
from, by Asset ID; those IDs correspond to files in `SOURCE-ASSETS/`.

**Honour the hard constraint.** Any entry with `"assertsFact": true` must be SKIPPED.
Report it as skipped and move on. Those images would function as factual claims about the
business — crew size, track record, a real person's face — and must come from a camera.
There is no prompt for them in the prompt pack. Do not improvise one.

**For every remaining entry, in order:**

1. Load the reference images named in `references`.
2. Apply `STYLE-GUIDE/style-guide.md` in full. Every asset in this batch must look like
   it came from the same photographer on the same job.
3. Use the matching prompt from `prompt-pack.md` verbatim as the base.
4. Produce at the exact `ratio` and `resolution` in the manifest. Do not substitute a
   convenient aspect ratio — these fill fixed slots in a built layout.
5. **Respect `cropSafeArea` literally.** It records where text sits in the real design
   and where mobile crops the frame. An image that ignores it is unusable even if it is
   beautiful.
6. Return the file named exactly `filename`. Not `image1.png`. The filename is how the
   asset finds its way back into the site without anyone having to ask.

**Identity consistency.** Where several assets share a reference person, that person must
be recognisably the same individual across all of them — same face, same build, same
working clothes. Inconsistent identity across a site reads as fake faster than any
single flaw.

**Materials consistency.** Israeli electrical work has a specific look: CHINT and ABB and
Hager breakers on DIN rail, white plastic consumer units, Hebrew label tape, plaster and
block walls, corrugated conduit. Match the references. Do not produce American-style
breaker panels or European sockets.

**When you finish**, output a table: Asset ID · produced / skipped · filename · one line
on any deviation from the spec and why.
