async function checkGrammar() {
  const inputText = document.getElementById("grammarInput").value.trim();
  const resultBox = document.getElementById("grammarResult");

  if (!inputText) {
    resultBox.innerText = "Please paste some text to analyse.";
    return;
  }

  resultBox.innerText = "Checking grammar...";

  try {
    const response = await fetch("https://api.languagetoolplus.com/v2/check", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        text: inputText,
        language: "en-GB" // UK English
      })
    });

    const data = await response.json();

    if (data.matches.length === 0) {
      resultBox.innerText = "✅ No issues found. Your text looks great!";
    } else {
      resultBox.innerHTML = "<strong>Suggestions:</strong><ul>" +
        data.matches.map(match => `<li>${match.message} <br><em>"${match.context.text}"</em></li>`).join('') +
        "</ul>";
    }
  } catch (error) {
    resultBox.innerText = "❌ Error checking grammar. Please try again later.";
    console.error(error);
  }
}

async function checkSEO() {
  const siteUrl = document.getElementById("seoInput").value.trim();
  const resultBox = document.getElementById("seoResult");

  if (!siteUrl) {
    resultBox.innerText = "Please enter a valid URL.";
    return;
  }

  resultBox.innerText = "Analysing SEO...";

  const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace this

  try {
    const res = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(siteUrl)}&key=${apiKey}`
    );
    const data = await res.json();

    const score = data.lighthouseResult.categories.performance.score * 100;
    const mobile = data.lighthouseResult.categories.accessibility.score * 100;
    const seo = data.lighthouseResult.categories.seo.score * 100;

    resultBox.innerHTML = `
      ✅ <strong>PageSpeed Score:</strong> ${score}/100<br>
      📱 <strong>Mobile Accessibility:</strong> ${mobile}/100<br>
      📈 <strong>SEO Best Practices:</strong> ${seo}/100<br>
    `;
  } catch (err) {
    console.error(err);
    resultBox.innerText = "❌ Could not fetch SEO data. Check URL or try later.";
  }
}

