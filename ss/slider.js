//first picture
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
// current slide counter
let curSlide = 0;
// select next slide button
const nextSlide = document.querySelector(".btn-right");
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
    //   move slide by -100%

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
  
  // select prev slide button
const prevSlide = document.querySelector(".btn-left");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

//second picture

// Select all slides
const slidesTwo = document.querySelectorAll(".slide-second");

// loop through slides and set each slides translateX property to index * 100% 
slidesTwo.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
// current slide counter
let currentSlide = 0;
// select next slide button
const slideRight = document.querySelector(".btn-right-second");
// maximum number of slides
let maximumSlide = slidesTwo.length - 1;

// add event listener and navigation functionality
slideRight.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlide === maximumSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
    //   move slide by -100%

    slidesTwo.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });
  });
  
  // select prev slide button
const slideLeft = document.querySelector(".btn-left-second");

// add event listener and navigation functionality
slideLeft.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (currentSlide === 0) {
    currentSlide = maximumSlide;
  } else {
    currentSlide--;
  }

  //   move slide by 100%
  slidesTwo.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});


//THIRD SLIDER

// Select all slides
const slidesThird = document.querySelectorAll(".slide-third");

// loop through slides and set each slides translateX property to index * 100% 
slidesThird.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
// current slide counter
let cuSlide = 0;
// select next slide button
const neSlide = document.querySelector(".btn-right-third")
// maximum number of slides
let maSlide = slidesThird.length - 1;

// add event listener and navigation functionality
neSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (cuSlide === maSlide) {
    cuSlide = 0;
  } else {
    cuSlide++;
  }
    //   move slide by -100%

    slidesThird.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - cuSlide)}%)`;
    });
  });
  
  // select prev slide button
const preSlide = document.querySelector(".btn-left-third");

// add event listener and navigation functionality
preSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (cuSlide === 0) {
    cuSlide = maSlide;
  } else {
    cuSlide--;
  }
  //   move slide by 100%
  slidesThird.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - cuSlide)}%)`;
  });
});