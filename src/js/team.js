const slider = document.querySelector('.team__list');
const sliderChild = document.querySelectorAll(".team__item")
const prevBtn = document.querySelector('.team__prevBtn');
const nextBtn = document.querySelector('.team__nextBtn');

let currentIndex = 0;
nextBtn.addEventListener('click', () => {
    if (currentIndex < sliderChild.length - 1) {
        currentIndex++;
        updateSlider();
    }
});
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});



function updateSlider() {
    const offset = -currentIndex * 300;
    slider.style.transform = `translateX(${offset}px)`;
}
