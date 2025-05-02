const header = document.querySelector("header");
const hoverZone = document.querySelector(".top-hover-zone");
const navbar = document.getElementById('home');

hoverZone.addEventListener("mouseenter", () => {
  header.style.top = "0";  
});

hoverZone.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!navbar.matches(':hover')) {
        navbar.style.top = '-60px';
      }
    }, 300);
  });

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    header.style.top = "0"; 
  } else {
    if (!header.matches(':hover') && !hoverZone.matches(':hover')) {
      header.style.top = "-100px";
    }
  }
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    navbar.style.top = '0';
  } else if (window.scrollY > lastScrollY) {
    navbar.style.top = '-60px'; // Adjusted to match the height of the navbar
  } else {
    navbar.style.top = '0';
  }
  lastScrollY = window.scrollY;
});
