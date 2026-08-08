/**
 * Test cases for the lead endpoint.
 *
 * Runs with `node --test` and no framework. The Cloudflare handler is pure enough to be
 * exercised with a fake KV and fetch, so these run today — before any hosting decision.
 *
 * The cases that matter most are the ones that assert the endpoint does NOT report
 * success: a lead that is not durably stored must never produce a thank-you page.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import ts from "typescript";

const here = dirname(fileURLToPath(import.meta.url));

/** Compile the TS handler to a module we can import, so the test runs the real code. */
const source = readFileSync(join(here, "lead.ts"), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const mod = await import(
  "data:text/javascript;base64," + Buffer.from(compiled).toString("base64")
);
const { onRequestPost } = mod;

/* ------------------------------------------------------------------ doubles */

function fakeKV(initial = {}, opts = {}) {
  const store = new Map(Object.entries(initial));
  return {
    store,
    async get(k) {
      return store.has(k) ? store.get(k) : null;
    },
    async put(k, v) {
      if (opts.failOnPut) throw new Error("KV unavailable");
      store.set(k, v);
    },
  };
}

function req(body, headers = {}) {
  return new Request("https://rnrg.co.il/api/lead", {
    method: "POST",
    headers: { "content-type": "application/json", "cf-connecting-ip": "203.0.113.7", ...headers },
    body: JSON.stringify(body),
  });
}

const validPrivate = () => ({
  leadId: "L-ABC123-XY9Z",
  createdAt: new Date().toISOString(),
  track: "private",
  payload: {
    name: "ישראל ישראלי",
    phone: "050-1234567",
    city: "אשדוד",
    service: "החלפה או חידוש לוח חשמל",
    details: "לוח ישן בלי פחת",
  },
});

const ctx = (env, request) => ({ request, env, waitUntil: (p) => p?.catch?.(() => {}) });

/* -------------------------------------------------------------------- tests */

test("accepts a valid private lead and stores it", async () => {
  const LEADS = fakeKV();
  const res = await onRequestPost(ctx({ LEADS }, req(validPrivate())));
  const body = await res.json();

  assert.equal(res.status, 200);
  assert.equal(body.ok, true);
  assert.equal(body.deduped, false);
  assert.ok(LEADS.store.has("lead:L-ABC123-XY9Z"), "lead must be persisted");

  const stored = JSON.parse(LEADS.store.get("lead:L-ABC123-XY9Z"));
  assert.equal(stored.fields.name, "ישראל ישראלי");
  assert.equal(stored.track, "private");
});

test("a storage failure reports failure, never success", async () => {
  // The single most important case: if the lead is not safe, the visitor must not be
  // shown a thank-you page, and the client must keep it queued for retry.
  const LEADS = fakeKV({}, { failOnPut: true });
  const res = await onRequestPost(ctx({ LEADS }, req(validPrivate())));
  const body = await res.json();

  assert.equal(res.status, 503);
  assert.equal(body.ok, false);
  assert.match(body.errorId, /^E-/, "must return a traceable error id");
});

test("a repeated leadId is deduplicated, not stored twice", async () => {
  const LEADS = fakeKV();
  const first = await onRequestPost(ctx({ LEADS }, req(validPrivate())));
  assert.equal((await first.json()).deduped, false);

  const second = await onRequestPost(ctx({ LEADS }, req(validPrivate())));
  const body = await second.json();

  assert.equal(second.status, 200);
  assert.equal(body.ok, true);
  assert.equal(body.deduped, true, "retry after a timeout must not create a second record");
  assert.equal(LEADS.store.size, 2, "one lead key plus one rate-limit key");
});

test("rejects a contracting lead missing required B2B fields", async () => {
  const LEADS = fakeKV();
  const lead = {
    leadId: "L-DEF456-AB1C",
    createdAt: new Date().toISOString(),
    track: "contracting",
    payload: { name: "דנה", phone: "052-7654321" }, // no company, role, email, etc.
  };
  const res = await onRequestPost(ctx({ LEADS }, req(lead)));
  const body = await res.json();

  assert.equal(res.status, 422);
  assert.equal(body.ok, false);
  assert.match(body.error, /company/);
  assert.equal(LEADS.store.has("lead:L-DEF456-AB1C"), false);
});

test("rejects an invalid Israeli phone number", async () => {
  const LEADS = fakeKV();
  const lead = validPrivate();
  lead.leadId = "L-PHONE1-BAD0";
  lead.payload.phone = "12345";
  const res = await onRequestPost(ctx({ LEADS }, req(lead)));

  assert.equal(res.status, 422);
  assert.match((await res.json()).error, /phone/);
});

test("accepts the +972 phone format", async () => {
  const LEADS = fakeKV();
  const lead = validPrivate();
  lead.leadId = "L-PHONE2-OK00";
  lead.payload.phone = "+972 54-665-6076";
  const res = await onRequestPost(ctx({ LEADS }, req(lead)));
  assert.equal(res.status, 200);
});

test("a filled honeypot returns 200 but stores nothing", async () => {
  const LEADS = fakeKV();
  const lead = validPrivate();
  lead.leadId = "L-BOT001-ZZZZ";
  lead.payload._company_url = "http://spam.example";
  const res = await onRequestPost(ctx({ LEADS }, req(lead)));

  assert.equal(res.status, 200, "bots should believe they succeeded");
  assert.equal(LEADS.store.has("lead:L-BOT001-ZZZZ"), false, "but nothing is stored");
});

test("rate limits after 5 submissions from one address", async () => {
  const LEADS = fakeKV();
  for (let i = 0; i < 5; i++) {
    const lead = validPrivate();
    lead.leadId = `L-RATE0${i}-AAAA`;
    const res = await onRequestPost(ctx({ LEADS }, req(lead)));
    assert.equal(res.status, 200, `submission ${i + 1} should pass`);
  }
  const lead = validPrivate();
  lead.leadId = "L-RATE99-AAAA";
  const res = await onRequestPost(ctx({ LEADS }, req(lead)));
  assert.equal(res.status, 429);
});

test("rejects a malformed leadId", async () => {
  const LEADS = fakeKV();
  const lead = validPrivate();
  lead.leadId = "<script>alert(1)</script>";
  const res = await onRequestPost(ctx({ LEADS }, req(lead)));
  assert.equal(res.status, 400);
});

test("rejects an unknown track", async () => {
  const LEADS = fakeKV();
  const lead = validPrivate();
  lead.leadId = "L-TRACK1-AAAA";
  lead.track = "admin";
  const res = await onRequestPost(ctx({ LEADS }, req(lead)));
  assert.equal(res.status, 400);
});

test("strips control characters and ignores unexpected keys", async () => {
  const LEADS = fakeKV();
  const lead = validPrivate();
  lead.leadId = "L-CLEAN1-AAAA";
  lead.payload.name = "\u05d9\u05d5\u05e1\u05d9\u001b[31m";
  lead.payload["../../etc/passwd"] = "nope";
  await onRequestPost(ctx({ LEADS }, req(lead)));

  const stored = JSON.parse(LEADS.store.get("lead:L-CLEAN1-AAAA"));
  assert.equal(
    stored.fields.name,
    "\u05d9\u05d5\u05e1\u05d9[31m",
    "the ESC byte is stripped; the printable characters that followed it remain"
  );
  assert.equal("../../etc/passwd" in stored.fields, false, "unexpected key dropped");
});

test("rejects invalid JSON with a traceable error id", async () => {
  const LEADS = fakeKV();
  const request = new Request("https://rnrg.co.il/api/lead", {
    method: "POST",
    headers: { "content-type": "application/json", "cf-connecting-ip": "203.0.113.9" },
    body: "{ not json",
  });
  const res = await onRequestPost(ctx({ LEADS }, request));
  const body = await res.json();
  assert.equal(res.status, 400);
  assert.match(body.errorId, /^E-/);
});

test("a notification failure still reports success, because the lead is stored", async () => {
  // Delivery is best-effort and alerted on. Failing the request here would make the
  // visitor resubmit a lead that was already captured.
  const LEADS = fakeKV();
  const alerts = [];
  globalThis.fetch = async (url) => {
    if (String(url).includes("webhook")) return new Response("nope", { status: 500 });
    alerts.push(url);
    return new Response("{}", { status: 200 });
  };

  const lead = validPrivate();
  lead.leadId = "L-NOTIF1-AAAA";
  const res = await onRequestPost(
    ctx({ LEADS, LEAD_WEBHOOK: "https://webhook.example/lead" }, req(lead))
  );

  assert.equal(res.status, 200);
  assert.ok(LEADS.store.has("lead:L-NOTIF1-AAAA"), "lead is safe even though delivery failed");
});
