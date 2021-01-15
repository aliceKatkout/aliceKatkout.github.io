let pico = document.getElementById("pico");
let acro =  document.getElementById("acro");
let epilepsy = document.getElementById("epilepsy");

pico.addEventListener("mouseover", function(event) {
  document.imgCode.src="./images/code/pico1.png"
});

acro.addEventListener("mouseover", function(event) {
  document.imgCode.src="./images/code/acro1.png"
});

epilepsy.addEventListener("mouseover", function(event) {
  document.imgCode.src="./images/code/epilepsy-avion.png"
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
