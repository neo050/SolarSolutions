/**
 * Lead intake endpoint — Cloudflare Pages Function.
 *
 * Deploys automatically at /api/lead once the project is hosted on Cloudflare Pages.
 * Nothing here needs the hosting decision to be *written* — only to be *run*. It is
 * complete, typed and testable now (see functions/api/lead.test.ts).
 *
 * The contract this upholds, from the brief: there must be no state in which the visitor
 * saw a success screen and the lead did not arrive. Concretely:
 *
 *   - The client never decides success. Only a 2xx from here, after the lead has been
 *     durably stored, results in the thank-you page.
 *   - Validation runs again here. Client-side validation is a UX affordance; it is
 *     trivially bypassed and is not a security control.
 *   - Every rejection carries an errorId that also appears in the logs, so a visitor who
 *     phones in quoting it can be traced.
 *   - Duplicates are collapsed on leadId, so a retry after a network timeout cannot
 *     produce two records of the same enquiry.
 *
 * Bindings expected (configured in the Cloudflare dashboard at deploy time):
 *   LEADS          KV namespace   — durable store, also backs dedup and rate limiting
 *   LEAD_WEBHOOK   secret         — where the notification is posted (email relay / CRM)
 *   TURNSTILE_SECRET secret       — Cloudflare Turnstile server key (optional)
 *   ALERT_WEBHOOK  secret         — notified when delivery fails (optional but recommended)
 */

interface Env {
  LEADS: KVNamespace;
  LEAD_WEBHOOK?: string;
  TURNSTILE_SECRET?: string;
  ALERT_WEBHOOK?: string;
}

interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  list(options?: { prefix?: string }): Promise<{ keys: { name: string }[] }>;
}

type Track = "private" | "contracting" | "solar";

interface LeadPayload {
  leadId: string;
  createdAt: string;
  track: Track;
  payload: Record<string, unknown>;
  turnstileToken?: string;
}

/* ------------------------------------------------------------------ config */

const TRACKS: Track[] = ["private", "contracting", "solar"];

/** Fields that must be present and non-empty, per track. Mirrors src/data/forms.ts. */
const REQUIRED: Record<Track, string[]> = {
  private: ["name", "phone", "city", "service"],
  contracting: ["name", "company", "role", "phone", "email", "projectType", "location", "stage"],
  solar: ["customerKind", "propertyType", "location", "roofArea", "name", "phone"],
};

/** Israeli mobile and landline, tolerant of spaces, dashes and the +972 prefix. */
const PHONE_RE = /^(\+?972[-\s]?|0)([23489]|5\d|7\d)[-\s]?\d{3}[-\s]?\d{4}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MAX_FIELD_LEN = 2000;
const MAX_BODY_BYTES = 32 * 1024;

/** Per-IP submission cap. Generous for humans, restrictive for scripts. */
const RATE_LIMIT = { max: 5, windowSeconds: 600 };

// Deduplication has no window and no key of its own: a leadId is a duplicate exactly when
// its record is already in KV, and lead records are written without a TTL. A constant here
// once claimed a 7-day window, which the code never implemented — the comment described an
// earlier design, and a stale comment about retention is worse than none.

/* ------------------------------------------------------------------ helpers */

const newErrorId = () =>
  `E-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`.toUpperCase();

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      // The form is same-origin; no CORS is granted deliberately.
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });
}

/**
 * Strips control characters and caps length. Values are stored and emailed, never
 * interpolated into HTML by this function — escaping is the responsibility of whatever
 * renders them, and the notification payload is JSON.
 *
 * The range is written with explicit escapes on purpose. It was previously composed of
 * literal control bytes pasted into the character class: unreadable, and it silently
 * missed NUL..BEL and DEL, so those would have survived into stored lead data. Tab and
 * newline are deliberately kept — a visitor may legitimately type them into free text.
 */
function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, MAX_FIELD_LEN);
}

function sanitisePayload(input: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(input)) {
    if (!/^[a-zA-Z0-9_]{1,40}$/.test(key)) continue; // ignore unexpected keys entirely
    if (value && typeof value === "object") {
      out[key] = clean(JSON.stringify(value));
    } else {
      out[key] = clean(value);
    }
  }
  return out;
}

async function verifyTurnstile(token: string | undefined, secret: string, ip: string) {
  if (!token) return { ok: false, reason: "missing token" };
  try {
    const body = new FormData();
    body.append("secret", secret);
    body.append("response", token);
    body.append("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
    return { ok: data.success, reason: (data["error-codes"] ?? []).join(",") };
  } catch (err) {
    // A Turnstile outage must not block real enquiries.
    return { ok: true, reason: "verification unavailable — allowed" };
  }
}

async function rateLimited(env: Env, ip: string): Promise<boolean> {
  // Fails OPEN, deliberately. This counter shares its store with the leads themselves,
  // so a storage outage would otherwise throw here and abort the request before it could
  // reach the handler's own failure path — turning a recoverable 503 into an unhandled
  // rejection. Letting a few extra submissions through during an outage is strictly
  // better than rejecting genuine enquiries; the real protections are server-side
  // validation and Turnstile.
  try {
    const key = `rl:${ip}`;
    const current = await env.LEADS.get(key);
    const count = current ? parseInt(current, 10) : 0;
    if (count >= RATE_LIMIT.max) return true;
    await env.LEADS.put(key, String(count + 1), { expirationTtl: RATE_LIMIT.windowSeconds });
    return false;
  } catch (err) {
    console.warn(JSON.stringify({ event: "rate_limit_unavailable", ip, err: String(err) }));
    return false;
  }
}

/* -------------------------------------------------------------------- route */

export async function onRequestPost(context: {
  request: Request;
  env: Env;
  waitUntil: (p: Promise<unknown>) => void;
}): Promise<Response> {
  const { request, env } = context;
  const errorId = newErrorId();
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";

  /* ---- size guard, before parsing ---- */
  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) {
    return json({ ok: false, error: "payload too large", errorId }, 413);
  }

  /* ---- parse ---- */
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    console.error(JSON.stringify({ errorId, event: "bad_json", ip }));
    return json({ ok: false, error: "invalid JSON", errorId }, 400);
  }

  /* ---- shape ---- */
  if (!body?.leadId || typeof body.leadId !== "string" || !/^L-[A-Z0-9-]{6,40}$/i.test(body.leadId)) {
    return json({ ok: false, error: "invalid leadId", errorId }, 400);
  }
  if (!TRACKS.includes(body.track)) {
    return json({ ok: false, error: "invalid track", errorId }, 400);
  }
  if (!body.payload || typeof body.payload !== "object") {
    return json({ ok: false, error: "missing payload", errorId }, 400);
  }

  /* ---- rate limit ---- */
  if (await rateLimited(env, ip)) {
    console.warn(JSON.stringify({ errorId, event: "rate_limited", ip, track: body.track }));
    return json(
      { ok: false, error: "too many submissions — please call instead", errorId },
      429
    );
  }

  /* ---- Turnstile, when configured ---- */
  if (env.TURNSTILE_SECRET) {
    const verdict = await verifyTurnstile(body.turnstileToken, env.TURNSTILE_SECRET, ip);
    if (!verdict.ok) {
      console.warn(JSON.stringify({ errorId, event: "turnstile_failed", ip, reason: verdict.reason }));
      return json({ ok: false, error: "verification failed", errorId }, 403);
    }
  }

  /* ---- honeypot ---- */
  const raw = body.payload as Record<string, unknown>;
  if (typeof raw._company_url === "string" && raw._company_url.trim()) {
    // Answer 200 so the bot records success and does not retry with variations.
    console.info(JSON.stringify({ errorId, event: "honeypot", ip }));
    return json({ ok: true, leadId: body.leadId, deduped: false }, 200);
  }

  /* ---- server-side validation (the client's is a convenience, not a control) ---- */
  const fields = sanitisePayload(raw);
  const missing = REQUIRED[body.track].filter((f) => !fields[f]);
  if (missing.length) {
    return json({ ok: false, error: `missing required fields: ${missing.join(", ")}`, errorId }, 422);
  }
  if (fields.phone && !PHONE_RE.test(fields.phone)) {
    return json({ ok: false, error: "invalid phone", errorId }, 422);
  }
  if (fields.email && !EMAIL_RE.test(fields.email)) {
    return json({ ok: false, error: "invalid email", errorId }, 422);
  }

  /* ---- deduplicate ---- */
  const key = `lead:${body.leadId}`;
  let existing: string | null = null;
  try {
    existing = await env.LEADS.get(key);
  } catch (err) {
    // Read failed. Fall through deliberately: the write below will fail too and return a
    // clean 503, which keeps the lead queued on the client instead of silently dropping it.
    console.warn(JSON.stringify({ errorId, event: "dedup_read_failed", err: String(err) }));
  }
  if (existing) {
    // A retry after a timeout. The lead is already stored; report success without
    // creating a second record or sending a second notification.
    console.info(JSON.stringify({ errorId, event: "duplicate", leadId: body.leadId }));
    return json({ ok: true, leadId: body.leadId, deduped: true }, 200);
  }

  /* ---- store durably BEFORE reporting success ---- */
  const record = {
    leadId: body.leadId,
    track: body.track,
    createdAt: body.createdAt || new Date().toISOString(),
    receivedAt: new Date().toISOString(),
    ip,
    userAgent: request.headers.get("user-agent") ?? "",
    country: (request as Request & { cf?: { country?: string } }).cf?.country ?? "",
    fields,
  };

  try {
    await env.LEADS.put(key, JSON.stringify(record));
  } catch (err) {
    // Storage failed: the lead is NOT safe. Report failure so the client keeps it queued
    // and retries. Reporting success here is precisely the failure mode to avoid.
    console.error(JSON.stringify({ errorId, event: "kv_put_failed", leadId: body.leadId, err: String(err) }));
    if (env.ALERT_WEBHOOK) {
      context.waitUntil(
        fetch(env.ALERT_WEBHOOK, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ severity: "critical", errorId, event: "lead_storage_failed", record }),
        }).catch(() => {})
      );
    }
    return json({ ok: false, error: "could not store lead", errorId }, 503);
  }

  /* ---- notify, after the lead is already safe ---- */
  if (env.LEAD_WEBHOOK) {
    context.waitUntil(
      fetch(env.LEAD_WEBHOOK, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(record),
      })
        .then(async (res) => {
          if (res.ok) return;
          // Delivery failed but the lead is stored — this is recoverable, and someone
          // must be told, because a stored lead nobody reads is still a lost lead.
          console.error(JSON.stringify({ errorId, event: "notify_failed", status: res.status, leadId: body.leadId }));
          if (env.ALERT_WEBHOOK) {
            await fetch(env.ALERT_WEBHOOK, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ severity: "high", errorId, event: "lead_notify_failed", record }),
            }).catch(() => {});
          }
        })
        .catch((err) => {
          console.error(JSON.stringify({ errorId, event: "notify_threw", leadId: body.leadId, err: String(err) }));
        })
    );
  }

  console.info(JSON.stringify({ event: "lead_stored", leadId: body.leadId, track: body.track }));
  return json({ ok: true, leadId: body.leadId, deduped: false }, 200);
}

/** Anything other than POST. */
export async function onRequest(): Promise<Response> {
  return json({ ok: false, error: "method not allowed" }, 405);
}
