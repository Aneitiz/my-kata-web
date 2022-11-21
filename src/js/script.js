!"use strict";
const slider = document.querySelector(".swiper");
const sliderShowBtn = document.querySelector(".card__show-more");
const sliderBtnText = document.querySelector(".card__show-more-text");
const sliderBtnImage = document.querySelector(".slider__show-image");
const cardHiddenItem = document.querySelector(".card--hidden");
const mediaQuery = window.matchMedia("(min-width: 768px)");
let toggler;
let mySwiper;

document.addEventListener("DOMContentLoaded", () => {
  let sliderToggler = function (elements) {
    toggler = sliderShowBtn.addEventListener("click", () => {
      elements.classList.toggle("card");
      if (elements.classList.contains("card")) {
        sliderBtnText.innerHTML = "скрыть";
        sliderBtnImage.src = "src/assets/img/arrows-up.svg";
      } else if (elements.classList.contains("card--hidden")) {
        sliderBtnText.innerHTML = "Показать всё";
        sliderBtnImage.src = "src/assets/img/arrows-dawn.svg";
      }
    });
  };

  function mobileSlider() {
    if (mediaQuery.matches === false) {
      mySwiper = new Swiper(".swiper", {
        grabCursor: true,
        loop: true,
        slidesPerView: "1.3",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
      mySwiper.update();
    }
    if (mediaQuery.matches) {
      if (slider.classList.contains("swiper-initialized")) {
        mySwiper.update();
        mySwiper.destroy();
      }
    }
  }

  mobileSlider();

  sliderToggler(cardHiddenItem);
});
