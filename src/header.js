// navigation bar
// click on hamb
let hambIcon = document.querySelector("#hamb");
let menu = document.querySelector("#menu");
let greyBg = document.querySelector("#greyBg");
let body = document.querySelector("body");
hambIcon.addEventListener("click", () => {
  menu.classList.remove("-right-full");
  menu.classList.add("right-0");
  greyBg.classList.remove("hidden");
    // control scrolling
  body.classList.add("overflow-hidden");
});
// click on x
let xIcon = document.querySelector("#xIcon");
xIcon.addEventListener("click", () => {
  menu.classList.remove("right-0");
  menu.classList.add("-right-full");
  greyBg.classList.add("hidden");
      // control scrolling
  body.classList.remove("overflow-hidden");
});
// click on body (greyBg)
greyBg.addEventListener("click", () => {
  menu.classList.remove("right-0");
  menu.classList.add("-right-full");
  greyBg.classList.add("hidden");
});
// click on search btn in desktop
let searchBtn = document.querySelector("#searchBtn");
let searchW = document.querySelector("#searchWrapper");
let loginBox = document.querySelector("#loginBox");

searchBtn.addEventListener("click", () => {
  searchW.classList.remove("hidden");
  searchW.classList.add("flex");
  loginBox.classList.remove("md:block");
  loginBox.classList.add("md:hidden");
  menu.classList.add("hidden");
  // get gray background
  greyBg.classList.remove("hidden");
  // control scrolling
  body.classList.add("overflow-hidden");
});

// remove gray bg and seraching wrapper
greyBg.addEventListener("click", () => {
  greyBg.classList.add("hidden");
  searchW.classList.remove("flex");
  searchW.classList.add("hidden");
  loginBox.classList.remove("md:hidden");
  loginBox.classList.add("md:block");
  menu.classList.remove("hidden");
  // control scrolling
  body.classList.remove("overflow-hidden");
});
// deleting the search history
let bin = document.querySelector("#bin");
let searchH = document.querySelector("#searchH");
bin.addEventListener("click", () => {
  searchH.classList.add("hidden");
});
// آزمایشی فعلا 
searchH.classList.remove("hidden")

const locationSelect = document.getElementById("location__select");
const locationList = document.getElementById("location__list");
const locationArrow = document.getElementById("location__arrow");
const locationInput = document.getElementById("location__input");

// نمایش/مخفی کردن لیست با کلیک روی select
locationSelect.addEventListener("click", function (e) {
  e.stopPropagation(); // جلوگیری از بسته شدن فوری
  locationList.classList.toggle("hidden");
  locationArrow.classList.toggle("rotate-180");
});

// بستن لیست با کلیک در هر جای دیگر صفحه
document.addEventListener("click", function (e) {
  if (!locationSelect.contains(e.target)) {
    locationList.classList.add("hidden");
    locationArrow.classList.remove("rotate-180");
  }
});

// انتخاب آیتم از لیست
locationList.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", function () {
    locationInput.value = item.textContent;
    locationList.classList.add("hidden");
    locationArrow.classList.remove("rotate-180");
  });
});

// تنظیمات انتخاب ساعت و تاریخ
jalaliDatepicker.startWatch({
  autoShow: false,
});
const inputList = document.querySelectorAll("input[data-jdp]");
for (i = 0; i < inputList.length; i++) {
  inputList[i].addEventListener("focus", function () {
    let defaults = {
      date: true,
      time: false,
      dayRendering: null,
    };
    if (this.hasAttribute("data-jdp-option-1")) {
      jalaliDatepicker.updateOptions({
        date: true,
        time: false,
        persianDigits: true,
        minDate: "today",
      });
    } else if (this.hasAttribute("data-jdp-option-2")) {
      jalaliDatepicker.updateOptions({
        date: false,
        time: true,
        hasSecond: false,
        persianDigits: true,
      });
    } else if (this.hasAttribute("data-jdp-option-3")) {
      jalaliDatepicker.updateOptions({
        date: true,
        time: false,
        persianDigits: true,
        minDate: "today",
      });
    } else if (this.hasAttribute("data-jdp-option-4")) {
      jalaliDatepicker.updateOptions({
        date: false,
        time: true,
        hasSecond: false,
        persianDigits: true,
      });
    } else {
      jalaliDatepicker.updateOptions(defaults);
    }
    jalaliDatepicker.show(this);
  });
}
