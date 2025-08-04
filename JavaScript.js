function checkGrammar() {
  const text = document.querySelector('textarea').value;
  const output = document.getElementById('grammarOutput');

  if (!text.trim()) {
    output.innerText = "Please enter text to check.";
    return;
  }

  output.innerText = "✅ Grammar looks great! (Note: Real API integration pending.)";
}

function checkSEO() {
  const url = document.getElementById('seoInput').value;
  const output = document.getElementById('seoOutput');

  if (!url.trim()) {
    output.innerText = "Please enter a website URL.";
    return;
  }

  output.innerText = `🔍 SEO score for ${url} is 85/100 (Simulated result).`;
}
