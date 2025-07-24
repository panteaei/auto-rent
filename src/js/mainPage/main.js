// first section
// swiper for brands
var swiper = new Swiper(".brands_swiper", {
  slidesPerView: 2, // مقدار پیش‌فرض برای موبایل
  spaceBetween: 10,
  breakpoints: {
    380: {
      // برای تبلت
      slidesPerView: 5,
      spaceBetween: 0,
    },
    480: {
      // برای تبلت
      slidesPerView: 5,
      spaceBetween: 15,
    },
    640: {
      // برای تبلت
      slidesPerView: 6,
      spaceBetween: 15,
    },
    768: {
      // برای تبلت
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1024: {
      // برای تبلت
      slidesPerView: 7,
      spaceBetween: 15,
    },
    1280: {
      // برای دسکتاپ کوچک
      slidesPerView: 8,
      spaceBetween: 4,
    },
    1440: {
      // برای دسکتاپ بزرگ
      slidesPerView: 10,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: ".swiper-button-brands-next",
    prevEl: ".swiper-button-brands-prev",
  },
});
// section 6
// for hiding and showing paragraph
const paragraph1 = document.getElementById("question__paragraph1");
const paragraph2 = document.getElementById("question__paragraph2");
const paragraph3 = document.getElementById("question__paragraph3");
const paragraph4 = document.getElementById("question__paragraph4");
const plus1 = document.getElementById("plus1");
const minus1 = document.getElementById("minus1");
const plus2 = document.getElementById("plus2");
const minus2 = document.getElementById("minus2");
const plus3 = document.getElementById("plus3");
const minus3 = document.getElementById("minus3");
const plus4 = document.getElementById("plus4");
const minus4 = document.getElementById("minus4");

function show(text, plus, minus) {
  plus.addEventListener("click", () => {
    text.classList.remove("hidden");
    text.classList.add("block");
    plus.classList.add("hidden");
    plus.classList.remove("block");
    minus.classList.add("block");
    minus.classList.remove("hidden");
  });
}
function hide(text, plus, minus) {
  minus.addEventListener("click", () => {
    text.classList.remove("block");
    text.classList.add("hidden");
    minus.classList.remove("block");
    minus.classList.add("hidden");
    plus.classList.remove("hidden");
    plus.classList.add("block");
  });
}
// box 1
show(paragraph1, plus1, minus1);
hide(paragraph1, plus1, minus1);
// box 2
show(paragraph2, plus2, minus2);
hide(paragraph2, plus2, minus2);
// box 3
show(paragraph3, plus3, minus3);
hide(paragraph3, plus3, minus3);
// box 4
show(paragraph4, plus4, minus4);
hide(paragraph4, plus4, minus4);

//section 7
// swiper for reviews
var swiper = new Swiper(".reviews_swiper", {
  slidesPerView: 1, // مقدار پیش‌فرض برای موبایل
  spaceBetween: 0,
  breakpoints: {
    380: {
      // برای 'گوشی'
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      // برای گوشی
      slidesPerView: 1,
      spaceBetween: 0,
    },
    604: {
      // برای تبلت
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      // برای تبلت
      slidesPerView: 2,
      spaceBetween: 1,
    },
    896: {
      // برای تبلت
      slidesPerView: 3,
      spaceBetween: 1,
    },
    1024: {
      // برای تبلت
      slidesPerView: 3,
      spaceBetween: 1,
    },
    1222: {
      // برای تبلت
      slidesPerView: 4,
      spaceBetween: 1,
    },
    1280: {
      // برای دسکتاپ کوچک
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-reviews-next",
    prevEl: ".swiper-button-reviews-prev",
  },
});
