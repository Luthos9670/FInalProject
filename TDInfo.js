let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const introHeader = document.getElementById("introHeader");
const headerBox = document.getElementById("headerBox");

function changeSlide(direction) {
  if (introHeader) {
    introHeader.style.display = 'none';
    headerBox.style.display = 'block';
  }

  if (direction === 'right') {
    currentSlide = (currentSlide + 1) % slides.length;
  } else {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }

  // Hide all slides and show the current one
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentSlide) {
      slide.classList.add("active");
    }
  });
}
changeSlide('right');
