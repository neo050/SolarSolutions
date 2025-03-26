/**************************************
 * 1) EmailJS INIT
 **************************************/
// Initialize EmailJS (public key)
emailjs.init("7BQ442uTTcxN1Owoa");

/**************************************
 * 2) CONTACT FORM (contact.html)
 **************************************/
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  // EmailJS configuration
  const serviceID = "service_o5qssn5";
  const templateID = "template_y2az434";

  emailjs
    .sendForm(serviceID, templateID, this)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      window.location.href = "success.html"; // Redirect on success
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("שליחת הטופס נכשלה, אנא נסו שוב מאוחר יותר.");
    });
});

/**************************************
 * 3) COMPATIBILITY FORM (CompatibilityCheck.html)
 **************************************/
// Example ID = "compatibilityForm"
document
  .getElementById("compatibilityForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    // You can reuse the same service/template, or use a different one
    const serviceID = "service_o5qssn5";
    const templateID = "template_0nrspxv"; 
    // If you created a new template for these fields, use its ID

    emailjs
      .sendForm(serviceID, templateID, this)
      .then((response) => {
        console.log("Compatibility Form SUCCESS!", response.status, response.text);
        window.location.href = "success.html"; // or any other page
      })
      .catch((error) => {
        console.error("Compatibility Form FAILED...", error);
        alert("שליחת הטופס נכשלה, אנא נסו שוב מאוחר יותר.");
      });
  });

/**************************************
 * 4) SOLAR SAVINGS CALCULATOR
 **************************************/
function calculateSavings() {
  const monthlyUsage = parseFloat(document.getElementById("monthlyUsage").value);
  const electricityCost = parseFloat(
    document.getElementById("electricityCost").value
  );
  const resultDiv = document.getElementById("result");

  if (
    isNaN(monthlyUsage) ||
    isNaN(electricityCost) ||
    monthlyUsage <= 0 ||
    electricityCost <= 0
  ) {
    resultDiv.innerHTML = "<p>נא להזין ערכים חוקיים.</p>";
    return;
  }

  const monthlyCost = monthlyUsage * electricityCost;
  const monthlySavings = monthlyCost * 0.9; // 90% discount
  const yearlySavings = monthlySavings * 12;

  resultDiv.innerHTML = `
    <h3>תוצאות החיסכון:</h3>
    <p>חיסכון חודשי: ${monthlySavings.toFixed(2)} ש"ח</p>
    <p>חיסכון שנתי: ${yearlySavings.toFixed(2)} ש"ח</p>
  `;
}

/**************************************
 * 5) OPTIONAL: GOOGLE PLACES AUTOCOMPLETE
 **************************************/
// If you want to initialize Google Autocomplete for an address input
// you can define a function and set it as the callback in the script URL:
// e.g. <script src="https://maps.googleapis.com/maps/api/js?key=API_KEY&libraries=places&language=he&callback=initAutocomplete" async defer></script>
function initAutocomplete() {
  const addressInput = document.getElementById("fullAddress"); 
  // or whatever input ID you have in CompatibilityCheck.html

  if (!addressInput) return; // If there's no input on the page, do nothing

  const options = {
    componentRestrictions: { country: "il" },
    fields: ["address_components", "geometry"],
    types: ["address"],
  };

  const autocomplete = new google.maps.places.Autocomplete(addressInput, options);

  // Listen for place changes
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    console.log("Selected address:", place);

    // You could parse place.address_components to fill hidden fields
    // For example:
    // const cityField = document.getElementById("city");
    // const streetField = document.getElementById("street");
    // ...
  });
}

// Expose the calculator function globally if you want to call it from HTML
window.calculateSavings = calculateSavings;
window.initAutocomplete = initAutocomplete;
