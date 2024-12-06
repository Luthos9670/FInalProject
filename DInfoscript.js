
const fadeInSections = document.querySelectorAll('.fade-in-section');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function handleScroll() {
  fadeInSections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
