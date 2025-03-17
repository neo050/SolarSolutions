// טיפול בטופס "צור קשר" – מניעת שליחה ברירת מחדל והצגת הודעה
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    //e.preventDefault();
    //alert("תודה שפנית אלינו! ניצור איתך קשר בהקדם.");
    // ניתן להוסיף כאן לוגיקת AJAX לשליחה לשרת אם נדרש
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
  