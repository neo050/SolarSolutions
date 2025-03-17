// טיפול בטופס "צור קשר" עם EmailJS
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault(); // למנוע התנהגות ברירת מחדל של הטופס

  // קריאה ל-EmailJS כדי לשלוח את הטופס
  emailjs.sendForm('service_12b5hzh', 'template_y2az434', '#contactForm')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      // לאחר שליחה מוצלחת, הפנה את המשתמש לעמוד תודה
      window.location.href = 'success.html';
    }, function(error) {
      console.error('FAILED...', error);
      alert('שליחת הטופס נכשלה, אנא נסו שוב מאוחר יותר.');
    });
});

// פונקציה לחישוב חסכון במחשבון הסולארי
function calculateSavings() {
  const monthlyUsage = parseFloat(document.getElementById('monthlyUsage').value);
  const electricityCost = parseFloat(document.getElementById('electricityCost').value);
  const resultDiv = document.getElementById('result');

  if(isNaN(monthlyUsage) || isNaN(electricityCost) || monthlyUsage <= 0 || electricityCost <= 0) {
    resultDiv.innerHTML = "<p>נא להזין ערכים חוקיים.</p>";
    return;
  }

  const monthlyCost = monthlyUsage * electricityCost;
  const monthlySavings = monthlyCost * 0.9; // הנחה של 90% מהעלות עם מערכת סולארית
  const yearlySavings = monthlySavings * 12;

  resultDiv.innerHTML = `
    <h3>תוצאות החיסכון:</h3>
    <p>חיסכון חודשי: ${monthlySavings.toFixed(2)} ש"ח</p>
    <p>חיסכון שנתי: ${yearlySavings.toFixed(2)} ש"ח</p>
  `;
}
