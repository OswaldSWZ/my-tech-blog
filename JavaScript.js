let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
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

// Optional: Auto slide every 7 seconds
setInterval(nextSlide, 7000);

// Anchor nav click scroll (optional)
document.querySelectorAll("header nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").replace('#', '');
    const targetIndex = Array.from(slides).findIndex(s => s.id === targetId);
    currentSlide = targetIndex;
    showSlide(currentSlide);
  });
});
