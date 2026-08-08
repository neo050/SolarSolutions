/**
 * RNRG — analytics loader (Google Tag Manager).
 *
 * Loads GTM only when a real container id is configured. Until then this file is inert,
 * but `dataLayer` still accumulates events from main.js — so the moment a container id is
 * added, every event defined in the tracking plan starts flowing without further changes.
 *
 * ── TO ACTIVATE ────────────────────────────────────────────────────────────────
 * Replace the empty string below with the GTM container id (format: GTM-XXXXXXX).
 * Create the container at https://tagmanager.google.com, then inside it:
 *   1. Add a GA4 Configuration tag with the GA4 Measurement id (format: G-XXXXXXXXXX).
 *   2. Add GA4 Event tags triggered on these custom events pushed by main.js:
 *        call_click · whatsapp_click · form_start · form_error
 *        generate_lead · lead_private · lead_solar · lead_contracting
 *        page_view_enhanced
 *   3. Mark generate_lead, lead_private, lead_solar and lead_contracting as conversions.
 * Verify with GA4 DebugView before considering this task done.
 * ───────────────────────────────────────────────────────────────────────────────
 */
window.RNRG_ANALYTICS = {
  gtmId: "", // <-- BLOCKED: awaiting GTM container id from the business owner
};

(function (w, d, s, i) {
  if (!i) {
    // No container configured yet. dataLayer still exists and queues events.
    w.dataLayer = w.dataLayer || [];
    return;
  }
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0];
  var j = d.createElement(s);
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", window.RNRG_ANALYTICS.gtmId);
