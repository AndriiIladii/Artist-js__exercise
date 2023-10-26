const tabs = document.querySelectorAll(".tab__btn");
const allContent = document.querySelectorAll(".tabs__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    allContent.forEach((content) => {
      content.classList.remove("active");
    });
    allContent[index].classList.add("active");
  });
});

const slider = document.querySelector(".swiper-container");
const sliderGallery = document.querySelector(".swiper-container__gallery");

let swiper = new Swiper(slider, {
  spaceBetween: 30,
  slidesPerView: 2.5,
  initialSlide: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  slideToClickedSlide: true,
  speed: 1200,
  slideClass: "card",
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    425: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

let swiperGal = new Swiper(sliderGallery, {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  slideClass: "slider__item",
  breakpoints: {
    1440: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});

const timer = document.querySelector(".timer__wrapper");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// Устанавливаем дату и время, до которого хотим посчитать разницу
let countDownDate = new Date("Jan 9, 2024 11:04:08").getTime();

let updateTimer = setInterval(function () {
  // Получаем текущее дату и время
  let now = new Date().getTime();
  // Находим разницу между текущим временем и заданным
  let difference = countDownDate - now;

  // Рассчитываем дни, часы, минуты и секунды
  let daysDif = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hoursDif = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);

  // Вставляем значения в таймер
  days.innerHTML = daysDif;
  hours.innerHTML = hoursDif;
  minutes.innerHTML = minutesDif;
  seconds.innerHTML = secondsDif;

  // Обновляем функцию с интервалом 1 секунда
}, 1000);

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
