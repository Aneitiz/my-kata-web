!"use strict";
const slider = document.querySelector(".swiper");
let sliderShowBtn = document.querySelector(".card__show-more");
let sliderBtnText = document.querySelector(".card__show-more-text");
let sliderBtnImage = document.querySelector(".slider__show-image");
let cardHiddenItem = document.querySelector(".card--hidden");
let toggler;
let mySwiper;

let sliderToggler = function (elements) {
  toggler = sliderShowBtn.addEventListener("click", () => {
    elements.classList.toggle("card");
	if(elements.classList.contains("card")){
		sliderBtnText.innerHTML = "скрыть";
		sliderBtnImage.src = "src/assets/img/arrows-up.svg"
	  }else if(elements.classList.contains("card--hidden")){
		sliderBtnText.innerHTML = "Показать всё";
		sliderBtnImage.src = "src/assets/img/arrows-dawn.svg"
	  }
  });
};

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
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
    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

sliderToggler(cardHiddenItem);


