// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Dynamic Greeting Based on Time of Day
  const hours = new Date().getHours();
  const intro = document.querySelector('.intro');
  if (hours < 12) {
    intro.textContent += " Good morning!";
  } else if (hours < 18) {
    intro.text
  }  

  window.addEventListener('load', () => {
    const content = document.querySelector('.content');
    content.classList.add('slide-down');
  });