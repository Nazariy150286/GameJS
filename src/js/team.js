const slider = document.querySelector('.team__list');
const slides = document.querySelectorAll('#slider li');
const nextBtn = document.querySelector('.team__nextBtn');
const prevBtn = document.querySelector('.team__prevBtn');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
if (currentIndex === 0) {
  prevBtn.style.opacity = 0;
}
nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
    updateDots();
    if (currentIndex >= 0) {
      prevBtn.style.opacity = '1';
      // prevBtn.style.disabled = false;
    }
    if (currentIndex >= 5) {
      nextBtn.style.opacity = ' 0';
      // nextBtn.style.disabled = true;
    }
  }
});
prevBtn.addEventListener('click', () => {
  console.log(currentIndex);
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
    updateDots();
  }
  if (currentIndex === 1) {
    prevBtn.style.opacity = '0';
    console.log(10);

    // nextBtn.style.disabled = true;
  }
  if (currentIndex <= 5) {
    prevBtn.style.opacity = '1';
    nextBtn.style.opacity = '1';
    // prevBtn.style.disabled = false;
  }
});
function updateSlider() {
  const offset = -currentIndex * 610;
  slider.style.transform = `translateX(${offset}px)`;
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}
