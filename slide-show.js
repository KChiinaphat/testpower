let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 6000); // สลับสไลด์ทุก 6 วินาที
}

// ฟังก์ชันการเปลี่ยนสไลด์เมื่อกดลูกศร
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  showSlidesManually();
}

// ฟังก์ชันสำหรับการแสดงสไลด์ตามมือ
function showSlidesManually() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex - 1].style.display = "block";
}
