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
});
