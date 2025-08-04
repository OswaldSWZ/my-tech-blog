// ===== Grammar Checker =====
function checkGrammar() {
  const input = document.getElementById('grammarInput').value.trim();
  const output = document.getElementById('grammarResult');

  if (!input) {
    output.textContent = "Please paste some text to check.";
    return;
  }

  // Simulated response
  output.textContent = "✅ No major grammar issues found. Your writing looks clear!";
}

// ===== SEO Checker =====
function checkSEO() {
  const url = document.getElementById('seoInput').value.trim();
  const resultBox = document.getElementById('seoResult');

  if (!url || !url.startsWith("http")) {
    resultBox.textContent = "Please enter a valid website URL (starting with http or https).";
    return;
  }

  // Simulated SEO analysis
  resultBox.innerHTML = `
    <strong>SEO Score:</strong> 85/100 <br/>
    <strong>Mobile Friendly:</strong> ✅<br/>
    <strong>Page Speed:</strong> B+<br/>
    <strong>Meta Tags:</strong> Complete<br/>
    <strong>Alt Attributes:</strong> 90% Optimised
  `;
}

// ===== Image Slider (Home Page) =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto start the slider if on Home page
if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Auto-slide every 5s
}
