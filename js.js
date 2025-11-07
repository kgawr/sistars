// === POPUP ===
const popupOverlay = document.querySelector(".popup-overlay");
const popupContainer = document.querySelector(".popup-container");
const skipButton = document.querySelector(".popup-container .skip-button");

if (skipButton) {
  skipButton.addEventListener("click", () => {
    popupOverlay.classList.add("active");
    popupContainer.classList.add("active");
  });
}

function closePopup() {
  popupOverlay.style.display = "none";
}
if (popupOverlay) popupOverlay.addEventListener("click", closePopup);

// === HAMBURGER MENU ===
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#header .nav-list ul');
const menuItems = document.querySelectorAll('#header .nav-list ul li a');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
}

// === READ MORE BUTTONS ===
function toggleReadMore(dotsId, moreId, btnId) {
  const dots = document.getElementById(dotsId);
  const moreText = document.getElementById(moreId);
  const btnText = document.getElementById(btnId);

  if (!dots || !moreText || !btnText) return;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction() { toggleReadMore("dots", "more", "myBtn"); }
function myFunction1() { toggleReadMore("dots1", "more1", "myBtn1"); }
function myFunction2() { toggleReadMore("dots2", "more2", "myBtn2"); }

// === SLIDESHOW ===
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slides[slideIndex - 1].style.display = "block";

  if (dots.length) {
    for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");
    dots[slideIndex - 1].classList.add("active");
  }
}

// === SCROLL ANIMATION ===
const hiddenElements = document.querySelectorAll('.main-header-text-offer');

if (hiddenElements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));
}


// === LANGUAGE SWITCHER ===
const languageSelect = document.getElementById("languageSelect");
if (languageSelect) {
  languageSelect.addEventListener("change", e => setLanguage(e.target.value));

  window.addEventListener("DOMContentLoaded", () => {
    const browserLang = navigator.language.slice(0, 2);
    const supported = ["pl", "en", "it", "es"];
    const lang = supported.includes(browserLang) ? browserLang : "pl";
    languageSelect.value = lang;
    setLanguage(lang);
  });
}
