// Select all sections with the fade-in effect
const fadeInSections = document.querySelectorAll('.fade-in-section');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Function to add 'visible' class when the element is in the viewport
function handleScroll() {
  fadeInSections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    }
  });
}

// Check for visibility when the page is loaded and when scrolling
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
