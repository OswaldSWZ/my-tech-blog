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
    resultBox.innerText = "Please enter a valid website URL.";
    return;
  }

  resultBox.innerText = "🔍 Analysing... Please wait.";

  const apiKey = AIzaSyB-VMvqYYKwPcVASXtfTsF51zkTuf9bifc

  try {
    const response = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(siteUrl)}&strategy=mobile&key=${apiKey}`
    );
    const data = await response.json();

    if (!data.lighthouseResult) {
      resultBox.innerText = "❌ Invalid response or website unreachable.";
      return;
    }

    const performance = data.lighthouseResult.categories.performance.score * 100;
    const accessibility = data.lighthouseResult.categories.accessibility.score * 100;
    const bestPractices = data.lighthouseResult.categories["best-practices"].score * 100;
    const seo = data.lighthouseResult.categories.seo.score * 100;

    resultBox.innerHTML = `
      ✅ <strong>Performance:</strong> ${performance}/100<br>
      📱 <strong>Accessibility:</strong> ${accessibility}/100<br>
      🧠 <strong>Best Practices:</strong> ${bestPractices}/100<br>
      📈 <strong>SEO:</strong> ${seo}/100
    `;
  } catch (error) {
    console.error(error);
    resultBox.innerText = "❌ Error fetching SEO data. Check your URL or try again later.";
  }
}


