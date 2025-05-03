const header = document.getElementById('header');
const hoverZone = document.querySelector('.top-hover-zone');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  if (window.scrollY > 200 && !header.matches(':hover') && !hoverZone.matches(':hover')) {
    header.style.top = "-100px";
  } else {
    header.style.top = "0";
  }
});

hoverZone.addEventListener("mouseenter", () => {
  header.style.top = "0";  
});

// Slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const indicators = document.getElementsByClassName("slide-indicator");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    if (indicators[i]) {
      indicators[i].classList.remove("active");
    }
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  
  slides[slideIndex-1].classList.add("active");
  if (indicators[slideIndex-1]) {
    indicators[slideIndex-1].classList.add("active");
  }
  
  setTimeout(showSlides, 6000);
}


function plusSlides(n) {
  showSlidesManually(slideIndex += n);
}

function currentSlide(n) {
  showSlidesManually(slideIndex = n);
}

function showSlidesManually(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    if (indicators[i]) {
      indicators[i].classList.remove("active");
    }
  }
  
  slides[slideIndex-1].classList.add("active");
  if (indicators[slideIndex-1]) {
    indicators[slideIndex-1].classList.add("active");
  }
}


const mapClose = document.querySelector('.map-close');
const mapContainer = document.querySelector('.map-container');

if (mapClose && mapContainer) {
  mapClose.addEventListener('click', () => {
    mapContainer.style.display = 'none';
  });
}


function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-' + lang + ']');
  const langButtons = document.querySelectorAll('.lang-btn');
  
 
  langButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent === (lang === 'th' ? 'ไทย' : 'EN')) {
      btn.classList.add('active');
    }
  });
  

  elements.forEach(element => {
    const text = element.getAttribute('data-' + lang);
    if (text) {
 
      if (element.tagName === 'INPUT') {
        if (element.type === 'text' || element.type === 'email' || element.type === 'search') {
          element.placeholder = text;
        } else {
          element.value = text;
        }
      } else {
        element.textContent = text;
      }
    }
  });
  

  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;
}
showSlides();


document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) {
    setLanguage(savedLang);
  }
});