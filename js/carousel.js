// variables
const carousel = document.querySelector(".carousel");

// convert the carousel children to an array
const slides = [...carousel.children];

// get the next/right button 
const nextBtn = document.querySelector(".btn-right");

// get the previous/left button
const previousBtn = document.querySelector(".btn-left");

// get the width of slide in all resolution
const slideWidth = slides[0].getBoundingClientRect().width;

//get the dots of the carousel
const dots = document.querySelector(".slider_nav");

//convert the dots to an array
const dotsArray = [... dots.children];

//slides bindings
let nextSlide;
let currentSlide;
let previousSlide;


// listeners
// on dots click
dots.addEventListener("click", function(event) {
    // if we didnt click on the dot, exit!
    if(event.target === dots) {
        return;
    }
    
    // get the target dot
    const targetDot = event.target;
    
    // get the current dot
    const currentDot = dots.querySelector(".active")
    
    currentSlide = carousel.querySelector(".active")
    
    // find the index of the dot we clicked so we can target the right slide
    const index = findIndex(targetDot, dotsArray);
    
    const targetSlide = slides[index];
    
    toggleSlide(currentSlide, targetSlide);
    toggleActive(currentDot, targetDot);
    toggleBtnVisibility(targetSlide)
})


// next button event listener
nextBtn.addEventListener("click", slideRight)

// previous button event listener
previousBtn.addEventListener("click", slideLeft)

// functions

// function to move the slide left
function slideLeft() {
    // get the current slide
    currentSlide = carousel.querySelector(".active");
    // get the next slide 
    previousSlide = currentSlide.previousElementSibling;

    toggleSlide(currentSlide, previousSlide);
    toggleActive(currentSlide, previousSlide)
    toggleBtnVisibility(previousSlide);
    
    let index = findIndex(previousSlide, slides);
    const currentDot = dots.querySelector(".active");
    const targetDot = dotsArray[index];
    toggleActive(currentDot, targetDot);
}

// function to move the slide right
function slideRight() {
    // get the current slide
    currentSlide = carousel.querySelector(".active");
    // get the next slide 
    nextSlide = currentSlide.nextElementSibling;

    toggleSlide(currentSlide, nextSlide);
    toggleActive(currentSlide, nextSlide)
    toggleBtnVisibility(nextSlide);
    
    let index = findIndex(nextSlide, slides);
    const currentDot = dots.querySelector(".active");
    const targetDot = dotsArray[index];
    toggleActive(currentDot, targetDot);
}

// function to toggle slide
function toggleSlide(currentSlide, target) {
    const position = target.style.left;
    carousel.style.transform = `translateX(-${position})`;
}

// function for toggling active
function toggleActive(current, target) {
    current.classList.remove("active");
    target.classList.add("active");
}

// function to hide and add buttons on specific conditions
function toggleBtnVisibility(target) {
    if(target === slides[0]) {
        previousBtn.classList.add("hide");
        nextBtn.classList.remove("hide");
        
    } else if(target === slides[slides.length - 1]) {
        nextBtn.classList.add("hide")
        previousBtn.classList.remove("hide")
    } else {
        nextBtn.classList.remove("hide");
        previousBtn.classList.remove("hide")
    }
}


// position the slides horizontally
function positionSlides(slides) {
    for(i = 0; i < slides.length; i++) {
        // loop the left style to all the slides
        slides[i].style.left = (slideWidth * i) + "px";
    }
}

positionSlides(slides);

// find the index of an item in an array
function findIndex(item, items) {
    for(let i = 0; i < items.length; i++) {
        if(item === items[i]) {
            return i;
        }
    }
}