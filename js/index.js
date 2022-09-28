const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {

    nav.classList.toggle('nav--visible');
})
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

const antarctica=document.querySelector(".antarctica");
const asia=document.querySelector(".asia");
const northAmerica=document.querySelector(".north-america");
const europe=document.querySelector(".europe");
const australia=document.querySelector(".australia");
const southAmerica=document.querySelector(".south-america");
const africa=document.querySelector(".africa");
const container=document.querySelector(".parent-prices");
//first image
const hotelImgFirst=document.querySelector(".first-hotel-img")
const midTextFirst=document.querySelector('.mid-text-first')
const hotelNameFirst=document.querySelector('.hotel-name-first')
const hotelLocationFirst=document.querySelector('.hotel-location-first')
const hotelDescriptionFirst=document.querySelector('.hotel-description-first')
const priceFirst=document.querySelector('.price-first')
//second
const hotelImgSecond=document.querySelector(".second-hotel-img")
const midTextSecond=document.querySelector('.mid-text-second')
const hotelNameSecond=document.querySelector('.hotel-name-second')
const hotelLocationSecond=document.querySelector('.hotel-location-second')
const hotelDescriptionSecond=document.querySelector('.hotel-description-second')
const priceSecond=document.querySelector('.price-second')
//third
const hotelImgThird=document.querySelector(".third-hotel-img")
const midTextTird=document.querySelector('.mid-text-third')
const hotelNameThird=document.querySelector('.hotel-name-third')
const hotelLocationThird=document.querySelector('.hotel-location-third')
const hotelDescriptionThird=document.querySelector('.hotel-description-third')
const priceThird=document.querySelector('.price-third')

//add event listener to continents

africa.addEventListener('click', function(){
  //first image
  hotelNameFirst.innerText="La Mamounia Hotel "
hotelLocationFirst.innerHTML="Marakesh"
hotelDescriptionFirst.innerHTML="Book now to spend amazing days in Marakesh."
priceFirst.innerHTML="220$"
hotelImgFirst.src="./images/lamamonia.jfif"
//second image
hotelNameSecond.innerText="Sofitel Cairo"
hotelLocationSecond.innerHTML="Cairo"
hotelDescriptionSecond.innerHTML="Book now to spend amazing days in Cairo"
priceSecond.innerHTML="120$"
hotelImgSecond.src="./images/sofitel-cairo.jfif"
//third image
hotelNameThird.innerText="Ol Jogi"
hotelLocationThird.innerHTML="Il polei"
hotelDescriptionThird.innerHTML="Book now to spend amazing days in Kenya";
priceThird.innerHTML="310$";
hotelImgThird.src="./images/kenya.jfif"
})
//europe
europe.addEventListener('click', function(){
  //first image
  hotelNameFirst.innerText="Sheraton Rhodes"
hotelLocationFirst.innerHTML="Ixia"
hotelDescriptionFirst.innerHTML="Book now to spend amazing days in Ixia."
priceFirst.innerHTML="250$"
hotelImgFirst.src="./images/download (1).jfif"
//second image
hotelNameSecond.innerText="Hard Rock Hotel"
hotelLocationSecond.innerHTML="Madrid"
hotelDescriptionSecond.innerHTML="Book now to spend amazing days in Madrid"
priceSecond.innerHTML="330$"
hotelImgSecond.src="./images/images (1).jfif"
//third image
hotelNameThird.innerText="Icehotel"
hotelLocationThird.innerHTML="Jukkasjärvi"
hotelDescriptionThird.innerHTML="Book now to spend amazing days in Sweeden."
priceThird.innerHTML="450$";
hotelImgThird.src="./images/download (2).jfif"
})
northAmerica.addEventListener('click', function(){
    //first image
    hotelNameFirst.innerText="Chateau Laurier"
    hotelLocationFirst.innerHTML="Ottawa"
    hotelDescriptionFirst.innerHTML="Book now to spend amazing days in Ottawa."
    priceFirst.innerHTML="200$"
    hotelImgFirst.src="./images/ottawa.jfif"
    //second image
    hotelNameSecond.innerText="Fairmont Hotel"
    hotelLocationSecond.innerHTML="Vancouver"
    hotelDescriptionSecond.innerHTML="Book now to spend amazing days in Vancouver"
    priceSecond.innerHTML="330$"
    hotelImgSecond.src="./images/fairmount.jfif"
    //third image
    hotelNameThird.innerText="Niagara Falls M"
    hotelLocationThird.innerHTML="Niagara Falls"
    hotelDescriptionThird.innerHTML="Book now to spend amazing days in Niagara Falls."
    priceThird.innerHTML="400$";
    hotelImgThird.src="./images/niagara.jfif"

})
australia.addEventListener('click', function(){
   //first image
   hotelNameFirst.innerText="Hilton hotel Sydney"
   hotelLocationFirst.innerHTML="Sydney"
   hotelDescriptionFirst.innerHTML="Book now to spend amazing days in Sydney."
   priceFirst.innerHTML="200$"
   hotelImgFirst.src="./images/sydney.jfif"
   //second image
   hotelNameSecond.innerText="Holiday Inn"
   hotelLocationSecond.innerHTML="Melbourne"
   hotelDescriptionSecond.innerHTML="Book now to spend amazing days in Melbourne"
   priceSecond.innerHTML="430$"
   hotelImgSecond.src="./images/melburn.jfif"
   //third image
   hotelNameThird.innerText="Turtle Beach Resort"
   hotelLocationThird.innerHTML="Gold Coast"
   hotelDescriptionThird.innerHTML="Book now to spend amazing days in Gold Coast."
   priceThird.innerHTML="460$";
   hotelImgThird.src="./images/turtle.jfif"

})
southAmerica.addEventListener('click', function(){
   //first image
   hotelNameFirst.innerText="Hotel Intel Brazil"
   hotelLocationFirst.innerHTML="Brazil"
   hotelDescriptionFirst.innerHTML="Book now to spend amazing days in Brazil."
   priceFirst.innerHTML="220$"
   hotelImgFirst.src="./images/brazil.jfif"
   //second image
   hotelNameSecond.innerText="Raddison Blue Hotel"
   hotelLocationSecond.innerHTML="Concon"
   hotelDescriptionSecond.innerHTML="Book now to spend amazing days in Concon"
   priceSecond.innerHTML="200$"
   hotelImgSecond.src="./images/concon.jfif"
   //third image
   hotelNameThird.innerText="Palladio Hotel"
   hotelLocationThird.innerHTML="Buenos Aires"
   hotelDescriptionThird.innerHTML="Book now to spend amazing days in Buenos Aires."
   priceThird.innerHTML="300$";
   hotelImgThird.src="./images/download (3).jfif"
})
asia.addEventListener('click', function(){
   //first image
   hotelNameFirst.innerText="Ej Anime Hotel"
   hotelLocationFirst.innerHTML="Japan"
   hotelDescriptionFirst.innerHTML="Book now to spend amazing days in Japan."
   priceFirst.innerHTML="220$"
   hotelImgFirst.src="./images/download (4).jfif"
   //second image
   hotelNameSecond.innerText="Golden Temple"
   hotelLocationSecond.innerHTML="Slem Reap"
   hotelDescriptionSecond.innerHTML="Book now to spend amazing days in Slem Reap"
   priceSecond.innerHTML="100$"
   hotelImgSecond.src="./images/download (5).jfif"
   //third image
   hotelNameThird.innerText="China Hotel"
   hotelLocationThird.innerHTML="Guangzhou"
   hotelDescriptionThird.innerHTML="Book now to spend amazing days in Guangzhou."
   priceThird.innerHTML="200$";
   hotelImgThird.src="./images/download (6).jfif"

})
antarctica.addEventListener('click', function(){
   //first image
   hotelNameFirst.innerText="Whichaway Camp"
   hotelLocationFirst.innerHTML="Antarctica"
   hotelDescriptionFirst.innerHTML="Book now to spend amazing days in Antarctica."
   priceFirst.innerHTML="6000$"
   hotelImgFirst.src="./images/download (7).jfif"
   //second image
   hotelNameSecond.innerText="Adventure ship"
   hotelLocationSecond.innerHTML="Antarctica"
   hotelDescriptionSecond.innerHTML="Book now to spend amazing days in Antarctica"
   priceSecond.innerHTML="60000$"
   hotelImgSecond.src="./images/download (8).jfif"
   //third image
   hotelNameThird.innerText="Ocean Nova"
   hotelLocationThird.innerHTML="Antarctica"
   hotelDescriptionThird.innerHTML="Book now to spend amazing days in Antarctica."
   priceThird.innerHTML="60000$";
   hotelImgThird.src="./images/download (9).jfif"
})





