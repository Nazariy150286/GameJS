const slider = document.querySelector('.team__list');
const slides = document.querySelectorAll('#slider li');
const nextBtn = document.querySelector(".team__nextBtn")
const prevBtn = document.querySelector(".team__prevBtn")
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
  nextBtn.addEventListener('click', () => {      
    if (currentIndex < slides.length -1) {
          currentIndex++;
          updateSlider();
          updateDots();
      
      }
  });
  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
         currentIndex--;
          updateSlider();
          updateDots();
         
      }
  });
  function updateSlider() {
      const offset = -currentIndex * 610;
      slider.style.transform = `translateX(${offset}px)`;
       if(currentIndex == 6 ){
        nextBtn.style.display ='block'
    }
      else if(currentIndex === 1  ){
        prevBtn.style.display ='block'
    }
  }

 function updateDots() {
     dots.forEach((dot, index) => {
         dot.classList.toggle('active', index === currentIndex)
     });
 }






