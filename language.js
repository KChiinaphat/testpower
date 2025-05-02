// script.js
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-th]');
    elements.forEach(el => {
      el.textContent = el.getAttribute('data-' + lang);
    });
  }
  