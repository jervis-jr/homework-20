function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("clock").textContent = timeString;
}
const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

function sliderFn() {
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  let currentSlide = 0;

  function renderSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("show-slide");
      } else {
        slide.classList.remove("show-slide");
      }
    });
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  function goToPreSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  next.addEventListener("click", goToNextSlide);
  prev.addEventListener("click", goToPreSlide);
  document.addEventListener("keyup", (e) => {
    console.log("key up", e);
    if (e.code === "ArrowRight") {
      goToNextSlide();
    }
    if (e.code === "ArrowLeft") {
      goToPreSlide();
    }
  });
}

// sliderFn();
function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

function updateCountdown() {
  let now = new Date();
  let lectureDate = new Date(now.getFullYear(), 2, 5, 20, 0, 0); // 5 მარტი, 20:00

  let timeDiff = lectureDate - now;

  if (timeDiff > 0) {
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById(
      "countdown"
    ).textContent = `დარჩენილი დრო: ${days} დღე ${hours} საათი ${minutes} წუთი`;
  } else {
    document.getElementById("countdown").textContent = "ლექცია უკვე დაიწყო!";
  }
}

setInterval(() => {
  updateClock();
  updateCountdown();
}, 1000);

let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let slideInterval;
let sliderWrapper = document.querySelector(".slider-wrapper");

function showSlide(index) {
  sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
  clearInterval(slideInterval);
}

startSlider();
document.querySelector(".slider").addEventListener("mouseenter", stopSlider);
document.querySelector(".slider").addEventListener("mouseleave", startSlider);
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);
