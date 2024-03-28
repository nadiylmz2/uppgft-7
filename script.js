const slides = document.querySelectorAll(".slides img");
let slideIndex = 0,
  intervalId = null;
function initializeSlider() {
  slides.length > 0 &&
    (slides[slideIndex].classList.add("displaySlide"),
    (intervalId = setInterval(nextSlide, 5e3)));
}
function showSlide(e) {
  e >= slides.length
    ? (slideIndex = 0)
    : e < 0 && (slideIndex = slides.length - 1),
    slides.forEach((e) => {
      e.classList.remove("displaySlide");
    }),
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
  clearInterval(intervalId), showSlide(--slideIndex);
}
function nextSlide() {
  showSlide(++slideIndex);
}
document.addEventListener("DOMContentLoaded", initializeSlider);
