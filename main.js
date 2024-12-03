document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header_button.burger1");
  const closeButton = document.querySelector(".header_button_burger");
  const mainBurger = document.querySelector(".main_burger");

  burgerButton.addEventListener("click", function () {
    mainBurger.classList.add("active");
  });

  closeButton.addEventListener("click", function () {
    mainBurger.classList.remove("active");
  });
});

document.addEventListener("click", function (el) {
  if (el.target.classList.contains("menu_item")) {
    let menu = document.querySelectorAll(".border-left");
    menu.forEach(function (elem) {
      elem.classList.remove("border-left");
    });

    el.target.classList.add("border-left");
  }
});

// Открытие окна отзыва

document.addEventListener("DOMContentLoaded", function () {
  const modalContainer = document.querySelector(".container");
  const openButtons = document.querySelectorAll(".header_button.sms");
  const openButtons1 = document.querySelectorAll(".end_footer_button1");
  const closeButton = document.querySelector(".burger3");
  openButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modalContainer.classList.remove("hidden");
      modalContainer.style.display = "flex";
    });
  });
  openButtons1.forEach((button) => {
    button.addEventListener("click", function () {
      modalContainer.classList.remove("hidden");
      modalContainer.style.display = "flex";
    });
  });
  closeButton.addEventListener("click", function () {
    modalContainer.classList.add("hidden");
    modalContainer.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalContainer = document.querySelector(".container");

  const closeButton = document.querySelector(".burger3");
  openButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modalContainer.classList.remove("hidden");
      modalContainer.style.display = "flex";
    });
  });
  closeButton.addEventListener("click", function () {
    modalContainer.classList.add("hidden");
    modalContainer.style.display = "none";
  });
});

// Заказать звонок
document.addEventListener("DOMContentLoaded", function () {
  const modalContainer = document.querySelector(".container2");
  const openButtons = document.querySelectorAll(
    ".header_button.call, .end_footer_button"
  );
  const closeButton = document.querySelector(".burger4");
  openButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modalContainer.classList.remove("hidden");
      modalContainer.style.display = "flex";
    });
  });

  closeButton.addEventListener("click", function () {
    modalContainer.classList.add("hidden");
    modalContainer.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const smsButton = document.querySelector(".header_button.sms");
  const modalCall = document.querySelector(".modal-call");
  const closeButton = document.querySelector(".btn-close-modal-call");

  smsButton.addEventListener("click", function () {
    modalCall.classList.add("active");
  });

  closeButton.addEventListener("click", function () {
    modalCall.classList.remove("active");
  });
});

let swiper = undefined;
function createSwiper() {
  swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    freeMode: true,
    mousewheel: true,
    observer: true,
    observeParents: true,
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function createSwiper(containerClass) {
  return new Swiper(containerClass, {
    slidesPerView: "auto",
    freeMode: true,
    mousewheel: true,
    observer: true,
    observeParents: true,
    keyboard: true,
    pagination: {
      el: `${containerClass} .swiper-pagination`,
      clickable: true,
    },
  });
}

const swiper1 = createSwiper(".swiper-container");
const swiper2 = createSwiper(".swiper-container-2");
const swiper3 = createSwiper(".swiper-container-3");

addEventListener("resize", function () {
  if (window.innerWidth < 769 && !swiper) {
    createSwiper();
  }

  if (window.innerWidth > 768 && swiper) {
    swiper.destroy();
    swiper = undefined;
  }
});
if (window.innerWidth < 769 && !swiper) {
  createSwiper();
}

document.addEventListener("click", function (el) {
  const showMoreButton = document.querySelector(".show-more");
  const showMoreText = document.querySelector(".show-more_text");
  const showMoreImg = document.querySelector(".show-more_img");
  const hiddenBrands = document.querySelectorAll(".hidden-desktop");
  const hiddenTabletBrands = document.querySelectorAll(".hidden-tablet");
  const swiperSlide = document.querySelector(".swiper-slide");

  if (
    el.target.classList.contains("show-more") ||
    el.target.classList.contains("show-more_img") ||
    el.target.classList.contains("show-more_text")
  ) {
    if (window.innerWidth > 1119) {
      swiperSlide.style.width = "240px";
    } else if (window.innerWidth > 767) {
      swiperSlide.style.width = "224px";
    }

    if (showMoreText.innerText === "Показать все") {
      hiddenBrands.forEach(function (elem) {
        elem.style.display = "block";
      });
      hiddenTabletBrands.forEach(function (elem) {
        elem.style.display = "block";
      });
      showMoreText.innerText = "Скрыть";
      showMoreImg.style.transform = "rotate(180deg)";
    } else if (showMoreText.innerText === "Скрыть") {
      hiddenBrands.forEach(function (elem) {
        elem.style.display = "none";
      });
      if (window.innerWidth < 1121) {
        hiddenTabletBrands.forEach(function (elem) {
          elem.style.display = "none";
        });
      }
      showMoreText.innerText = "Показать все";
      showMoreImg.style.transform = "rotate(0deg)";
    }
  }
});
