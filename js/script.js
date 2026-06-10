let currentSlide = 0;
const totalSlides = 3;

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });

  document.getElementById('slide-' + currentSlide).classList.add('active');

  const dots = document.querySelectorAll('.dot');
  dots.forEach(function(dot, index) {
    dot.classList.toggle('active', index === currentSlide);
  });
}

const autoPlay = setInterval(function() {
  changeSlide(1);
}, 5000);

const form = document.getElementById('sugerencia-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const btn = document.getElementById('submit-btn');
  const successMsg = document.getElementById('form-success');

  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Enviando...';
  btn.style.opacity = '0.7';
  btn.style.cursor = 'not-allowed';

  setTimeout(function() {
    successMsg.classList.remove('d-none');
    btn.innerHTML = '<i class="fa-solid fa-check me-2"></i> Enviado';
    btn.style.background = '#198754';
    btn.style.opacity = '1';
    form.reset();
  }, 1500);
});
