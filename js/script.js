// Burger menu

let menuBtn = document.querySelectorAll(".menu");
let menuLine = document.querySelectorAll(".menu-line");
let nav = document.querySelectorAll(".nav");

function toggleMenu() {
    nav.forEach(b=>b.classList.toggle("active"));
    menuLine.forEach(b=>b.classList.toggle("active"));
}

menuBtn.forEach(b=>b.addEventListener("click", toggleMenu));

// /Burger menu

// FirstSlider

let FirstSlideIndex = 1;

FirstShowSlides(FirstSlideIndex);

function FirstPlusSlides(n) {
    FirstShowSlides(FirstSlideIndex += n);
}

function FirstCurrentSlide(n){
    FirstShowSlides(FirstSlideIndex = n);
}

function FirstShowSlides(n){
    let i;
    let slides = document.getElementsByClassName("baner-item");
    let dots = document.getElementsByClassName("baner-dot");

    if (n > slides.length) {
        FirstSlideIndex = 1;
    }
    if (n < 1) {
        FirstSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[FirstSlideIndex-1].style.display = "block";
    dots[FirstSlideIndex-1].className += " active";
}

// /FirstSlider

// SecondSlider

let SecondSlideIndex = 1;

SecondShowSlides(SecondSlideIndex);

function SecondPlusSlides(n) {
    SecondShowSlides(SecondSlideIndex += n);
}

function SecondCurrentSlide(n){
    SecondShowSlides(SecondSlideIndex = n);
}

function SecondShowSlides(n){
    let i;
    let slides = document.getElementsByClassName("blog-item");
    let dots = document.getElementsByClassName("blog-dot");

    if (n > slides.length) {
        SecondSlideIndex = 1;
    }
    if (n < 1) {
        SecondSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[SecondSlideIndex-1].style.display = "block";
    dots[SecondSlideIndex-1].className += " active";
}

// /SecondSlider


// ThirdSlider

$(document).ready(function(){
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        arrows: false,
    });
});

// /ThirdSlider

// Accordion

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// /Accordion
