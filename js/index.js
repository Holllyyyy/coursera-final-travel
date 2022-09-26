const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {

    nav.classList.toggle('nav--visible');
})

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





/*
const europeOne = {
    images: "./images/europe-top-attractions-eiffel-tower.jpg",
    description: "The Eiffel Tower is one of France's most famous sights. Sitting in the heart of the Champ de Mars in Paris, the wrought-iron tower was originally built to serve as the entrance to the 1889 World's Fair. Engineer Gustave Eiffel received much criticism for his design, with people calling it a monstrosity and an impossible task - at the time of construction, the 324-meter-tall tower (equivalent to an 81-story building) was the tallest structure in the world.",
    more: "https://www.planetware.com/tourist-attractions-/paris-f-p-paris.htm"
}
const europeTwo = {
    images: "./images/europe-top-attractions-acropolis-athens-greece.jpg",
    description: "Watching over Athens from atop a rocky outcrop, the ancient citadel is one of Greece's most famous tourist destinations. The Acropolis' most famous buildings were all constructed in the fifth century BC under the watchful eye of statesman and general Pericles. The heart of the Acropolis is the Parthenon, a temple built to thank the gods for the victory over Persian invaders though it also served as the city treasury for a time. Other prominent buildings include the gateway Propylaea (which serves as the entrance to Acropolis, the Erechtheion Temple (dedicated to Athena and Poseidon), and the tiny but beautiful Temple of Athena Nike.",
    more: "https://www.planetware.com/tourist-attractions-/athens-gr-ath-ath.htm)"
}
const asiaOne = {
    images: "./images/asia-best-places-to-visit-dead-sea-israel-city.jpg",
    description: "The dark blue waters of the Dead Sea touch the borders of both Jordan and Israel. Actually a lake despite its name, the Dead Sea sits at the lowest land elevation on Earth over 430 meters below sea level. With a salt concentration of around 31 percent almost 10 times saltier than the ocean the Dead Sea is so thick, nothing can sink into it, and everyone who walks into it will naturally float.",
    more: "https://www.planetware.com/tourist-attractions-/dead-sea-isr-st-ds.htm"
}
const asiaTwo = {
    images: "./images/asia-best-places-to-visit-phuket-thailand.jpg",
    description: "Thailand's biggest island is also a magnet for visitors and for good reason. Phuket boasts some of the best beaches in the country, with clean, soft, rolling sands and turquoise waters as far as the eye can see. Kata, Hat Karon, and Kamala beaches see a lot of tourists during the high season (November to February) but remain sleepy little villages once the rains arrive. Beautiful coral reefs line up the coastline, offering amazing opportunities for snorkeling and diving but also sea kayaking and island hopping.",
    more: "https://www.planetware.com/rome/colosseum-i-la-rcl.htm"
}

const africaOne = {
    images: "./images/africa-best-places=to-visit-in-time-zanzibar-tanzania.jpg",
    description: "A visit to Zanzibar feels like stepping into another world, one where time stands still, and the only city, Stone Town, is a UNESCO World Heritage Site. The island in the Indian Ocean just off the coast of Tanzania is a place where Arab dhows or fishing boats still ply the picture perfect turquoise sea, and you can get lost in the beauty of Stone Town, wandering its narrow alleys past old mosques, vibrant bazaars, and riads with intricately carved doorways.",
    more: "https://www.planetware.com/africa/best-places-to-visit-saf-1-36.htm"
}

const africaTwo = {
    images: "./images/africa-best-places=to-visit-great-pyramids-cairo-egypt.jpg",
    description: "Watching the sun rise or set over the Pyramids of Giza in Egypt from the back of a camel is an experience you will never forget. The pyramids and the Great Sphinx date back to the 26th century BCE and are Egypts most iconic attractions. The Pyramids of Giza are easy to access from Egypt's capital and  largest city, Cairo, which is equally fascinating to visit. Set on the banks of the Nile River, Cairo is a chaotic and buzzy place that appears to never slow down, even in the dead of night. Here, ancient history meets a modern metropolis and there is much to see and do, with a visit to the Egyptian Museum at the top of most lists.",
    more: "https://www.planetware.com/tourist-attractions-/pyramids-of-giza-egy-giza-giza.htm"
}   
*/