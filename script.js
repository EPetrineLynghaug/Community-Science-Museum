let slideIndex = 0;

function showSlides(n) {
  slideIndex += n;
  let slides = document.getElementsByClassName("mySlides");

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("fade"); // Fjern fade-klassen
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("fade"); // Legg til fade-klassen
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}



