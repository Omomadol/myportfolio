// const hamMenu = document.querySelector('.ham-menu');
// const offScreenMenu = document.querySelector('.off-screen-menu');

// // Toggle the menu when the hamburger icon is clicked
// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// });

const slides = document.querySelectorAll(".porimg");
let slideIndex = 0;
let intervaliid = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervaliid = setInterval(nextSlide, 5000);
    }

}
function showSlide(index){

    if(index  >= slides.length){
            slideIndex = 0
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervaliid);
    slideIndex--;
    showSlide(slideIndex)
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


