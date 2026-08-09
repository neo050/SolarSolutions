/**
 * Whether the missing-information markers are visible.
 *
 * The <Pending> marker exists so that a hole in the source material does not stall the
 * build: the page gets designed correctly, the hole gets named, work continues. That is
 * the right behaviour for the people building the site. It is the wrong behaviour for a
 * visitor.
 *
 * The design review put it plainly. The homepage trust strip — four figures, the only
 * credibility element above the fold — carried a badge reading "שנות ניסיון — ממתין
 * לנתון". The contracting page devoted a whole panel to explaining that the largest
 * project delivered and the number of concurrent projects were not yet known: the single
 * question a main contractor opens that page to answer, replaced by a notice that nobody
 * had answered it. Every page's footer announced that opening hours were awaiting
 * confirmation.
 *
 * A visitor reading "we do not know this about ourselves yet" trusts the business less
 * than one who simply never sees the row. So in production the marker renders nothing,
 * and the surrounding label is removed with it — a heading over an empty value is its own
 * kind of broken.
 *
 * Nothing is hidden from the team: /internal/gaps/ and /internal/dashboard/ read the same
 * registry and always show the full picture, and `npm run dev` shows every marker in
 * place. The gap does not stop being tracked because it stopped being published.
 */
export const SHOW_PENDING = import.meta.env.DEV;
