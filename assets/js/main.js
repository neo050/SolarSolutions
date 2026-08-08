/**
 * RNRG — shared site script.
 *
 * Loaded by every static page. Everything here must be defensive: a page that lacks a
 * given element must not break the rest of the file. The previous version called
 * `document.getElementById("year").innerText` unguarded, which threw a TypeError on any
 * page without a #year element and silently killed every statement below it.
 */

/* ============================================================
 * 1) Analytics
 * ============================================================
 * GA4 / GTM are loaded by assets/js/analytics.js, which reads the container id from
 * window.RNRG_ANALYTICS. Until a real id is supplied it no-ops. `track()` below is safe
 * to call regardless — events queue into dataLayer and flush once GTM loads.
 */
window.dataLayer = window.dataLayer || [];

function track(eventName, params) {
  try {
    window.dataLayer.push(Object.assign({ event: eventName }, params || {}));
  } catch (err) {
    // Never let a tracking failure break a user-facing interaction.
  }
}

/** Attribution captured once per session, attached to every lead. */
function getAttribution() {
  var STORAGE_KEY = "rnrg_attribution";
  try {
    var stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (err) {
    /* sessionStorage can be unavailable in private mode — fall through */
  }

  var qs = new URLSearchParams(window.location.search);
  var attribution = {
    utm_source: qs.get("utm_source") || "",
    utm_medium: qs.get("utm_medium") || "",
    utm_campaign: qs.get("utm_campaign") || "",
    utm_term: qs.get("utm_term") || "",
    utm_content: qs.get("utm_content") || "",
    gclid: qs.get("gclid") || "",
    landing_page: window.location.pathname,
    referrer: document.referrer || "",
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch (err) {
    /* ignore */
  }
  return attribution;
}

/** Every lead gets an id so it can be matched between the inbox and analytics. */
function makeLeadId() {
  var rand = Math.random().toString(36).slice(2, 8);
  return "L-" + Date.now().toString(36) + "-" + rand;
}

/* ============================================================
 * 2) EmailJS
 * ============================================================ */
if (typeof emailjs !== "undefined") {
  emailjs.init("7BQ442uTTcxN1Owoa");
}

var EMAILJS_SERVICE = "service_o5qssn5";

/**
 * Wires a form to EmailJS with a lead id, attribution, a disabled-while-sending state
 * and a visible error message. Returns silently if the form is not on this page.
 */
function wireEmailForm(formId, templateId, leadType) {
  var form = document.getElementById(formId);
  if (!form) return;

  var submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
  var originalLabel = submitBtn ? submitBtn.textContent : "";

  // Hidden fields travel with the email so attribution is visible in the inbox,
  // not only in analytics.
  var attribution = getAttribution();
  var hidden = Object.assign({ lead_id: makeLeadId(), lead_type: leadType, page: window.location.pathname }, attribution);
  Object.keys(hidden).forEach(function (name) {
    if (form.querySelector('[name="' + name + '"]')) return;
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = hidden[name];
    form.appendChild(input);
  });

  var started = false;
  form.addEventListener(
    "focusin",
    function () {
      if (started) return;
      started = true;
      track("form_start", { form_id: formId, lead_type: leadType });
    },
    { once: false }
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (typeof emailjs === "undefined") {
      showFormError(form, "לא ניתן לשלוח כרגע. אפשר להתקשר 054-665-6076 או לשלוח הודעה בוואטסאפ.");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "שולח…";
    }
    clearFormError(form);

    emailjs
      .sendForm(EMAILJS_SERVICE, templateId, form)
      .then(function () {
        track("generate_lead", { form_id: formId, lead_type: leadType, lead_id: hidden.lead_id });
        track(leadType, { form_id: formId, lead_id: hidden.lead_id });
        window.location.href = "success.html?lead=" + encodeURIComponent(hidden.lead_id);
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.error("Lead submission failed", error);
        track("form_error", { form_id: formId, lead_type: leadType });
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
        showFormError(
          form,
          'השליחה נכשלה. אפשר לנסות שוב, להתקשר ל־054-665-6076, או לשלוח הודעה בוואטסאפ.'
        );
      });
  });
}

function showFormError(form, message) {
  var box = form.querySelector(".form-error");
  if (!box) {
    box = document.createElement("p");
    box.className = "form-error";
    box.setAttribute("role", "alert");
    box.style.cssText =
      "margin:1rem 0 0;padding:.75rem 1rem;border:1px solid #b3261e;background:#f7e4e2;color:#8a1c16;border-radius:6px;";
    form.appendChild(box);
  }
  box.textContent = message;
}

function clearFormError(form) {
  var box = form.querySelector(".form-error");
  if (box) box.remove();
}

/* ============================================================
 * 3) Form wiring
 * ============================================================ */
wireEmailForm("contactForm", "template_y2az434", "lead_private");
wireEmailForm("compatibilityForm", "template_0nrspxv", "lead_solar");

/* ============================================================
 * 4) Google Places autocomplete (address field on the solar form)
 * ============================================================ */
function initAutocomplete() {
  var addressInput = document.getElementById("fullAddress");
  if (!addressInput || typeof google === "undefined") return;

  var autocomplete = new google.maps.places.Autocomplete(addressInput, {
    componentRestrictions: { country: "il" },
    fields: ["address_components", "geometry", "formatted_address"],
    types: ["address"],
  });

  autocomplete.addListener("place_changed", function () {
    var place = autocomplete.getPlace();
    if (place && place.formatted_address) {
      addressInput.value = place.formatted_address;
    }
  });
}

/* ============================================================
 * 5) Outbound contact tracking — phone and WhatsApp
 * ============================================================ */
function wireContactTracking() {
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener("click", function () {
      track("call_click", { page: window.location.pathname, link_text: (link.textContent || "").trim().slice(0, 60) });
    });
  });

  document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function (link) {
    link.addEventListener("click", function () {
      track("whatsapp_click", { page: window.location.pathname });
    });
  });
}

/* ============================================================
 * 6) Hamburger navigation
 * ============================================================ */
function wireHamburger() {
  var hamburger = document.querySelector(".hamburger");
  var navOverlay = document.querySelector(".nav-overlay");
  if (!hamburger || !navOverlay) return;

  var setOpen = function (open) {
    navOverlay.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  };

  hamburger.setAttribute("aria-expanded", "false");
  hamburger.addEventListener("click", function () {
    setOpen(!navOverlay.classList.contains("open"));
  });
  navOverlay.addEventListener("click", function (e) {
    if (e.target === navOverlay) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
}

/* ============================================================
 * 7) Footer year
 * ============================================================ */
function setFooterYear() {
  var el = document.getElementById("year");
  if (!el) return; // <- the guard that was missing
  el.textContent = "© " + new Date().getFullYear();
}

/* ============================================================
 * Boot
 * ============================================================ */
function boot() {
  setFooterYear();
  wireHamburger();
  wireContactTracking();
  getAttribution(); // capture UTM on first page of the session
  track("page_view_enhanced", { page: window.location.pathname });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

window.initAutocomplete = initAutocomplete;
window.rnrgTrack = track;
