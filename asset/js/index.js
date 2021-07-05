var slideIndex = 1;
showSlides(slideIndex);
setInterval(function(){
    slideIndex = slideIndex + 1;
    showSlides(slideIndex);
},1500)

function plusSlides(n) {
  showSlides(slideIndex = slideIndex + n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item-slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}   
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");  
        
    }
    slides[slideIndex-1].className += " active";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
        
    }
    dots[slideIndex-1].className += " dot-active";
    
  }
function happyHover(x) {
  var happys = document.getElementsByClassName("happy");
  happys[x].style.display = "flex";
  var titles = document.getElementsByClassName("title");
  titles[x].className += " title-hover";
}
function happyOut(x) {
  var happys = document.getElementsByClassName("happy");
  happys[x].style.display = "none";
  var titles = document.getElementsByClassName("title");
  titles[x].className = titles[x].className.replace(" title-hover", "");
}