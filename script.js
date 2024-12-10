// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Let the browser handle external navigation (e.g., contact.html)
  });
});

// Dynamic Greeting Based on Time of Day
const hours = new Date().getHours();
const intro = document.querySelector('.intro');
if (intro) { // Ensure the element exists before modifying it
  if (hours < 12) {
    intro.textContent += " Good morning!";
  } else if (hours < 18) {
    intro.textContent += " Good afternoon!";
  } else {
    intro.textContent += " Good evening!";
  }
}

// Add Slide-Down Animation on Page Load
window.addEventListener('load', () => {
  const content = document.querySelector('.content');
  if (content) { // Ensure the element exists before adding the class
    content.classList.add('slide-down');
  }
});
