function checkGrammar() {
  const input = document.getElementById('grammarInput').value;
  const output = document.getElementById('grammarResult');

  if (!input.trim()) {
    output.innerText = "Please paste some text to check.";
    return;
  }

  // Simulated response (you can integrate with an API later)
  output.innerText = `No major grammar issues found. Looks good! ✔️`;
}

function checkSEO() {
  const input = document.getElementById('seoInput').value;
  const output = document.getElementById('seoResult');

  if (!input.trim()) {
    output.innerText = "Please enter a valid URL.";
    return;
  }

  // Simulated result (you can connect this to an API later)
  output.innerText = `SEO Score: 83/100 ✅  
Mobile Friendly: Yes  
Meta Tags: Complete  
Alt Text: 90% coverage  
Page Speed: B grade`;
}
