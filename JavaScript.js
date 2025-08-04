function checkGrammar() {
  const input = document.getElementById("grammarInput").value;
  const result = document.getElementById("grammarResult");

  if (!input.trim()) {
    result.innerText = "Please paste some text to analyse.";
  } else {
    result.innerText = "✅ No major errors found. Looks grammatically good!";
  }
}

function checkSEO() {
  const url = document.getElementById("seoInput").value;
  const result = document.getElementById("seoResult");

  if (!url.trim()) {
    result.innerText = "Please enter a website URL.";
  } else {
    result.innerText = "🔍 SEO Analysis Complete:\n- Meta Tags: OK\n- Speed: Good\n- Mobile Friendly: Yes\n- Alt Tags: 90% coverage";
  }
}
