//the double range slider
const slider1 = document.getElementById("slider-1");
const slider2 = document.getElementById("slider-2");
const sliderRange = document.getElementById("slider-range");
const value1 = document.getElementById("value-1");
const value2 = document.getElementById("value-2");
const minGap = 10000000;
const min = parseInt(slider1.min);
const max = parseInt(slider1.max);

function updateSlider() {
  let val1 = parseInt(slider1.value);
  let val2 = parseInt(slider2.value);

  if (val2 - val1 <= minGap) {
    if (event.target === slider1) {
      slider1.value = val2 - minGap;
      val1 = val2 - minGap;
    } else {
      slider2.value = val1 + minGap;
      val2 = val1 + minGap;
    }
  }

  value1.textContent = slider1.value;
  value2.textContent = slider2.value;

  const percent1 = ((slider1.value - min) / (max - min)) * 100;
  const percent2 = ((slider2.value - min) / (max - min)) * 100;

  sliderRange.style.right = percent1 + "%";
  sliderRange.style.width = percent2 - percent1 + "%";
}

slider1.addEventListener("input", updateSlider);
slider2.addEventListener("input", updateSlider);

// Initialize
updateSlider();

// category wrapper
let accordion1 = document.querySelector(".accordion1");
let accordionDiv1 = document.querySelector(".accordionDiv1");
let accordion2 = document.querySelector(".accordion2");
let accordionDiv2 = document.querySelector(".accordionDiv2");
let accordion3 = document.querySelector(".accordion3");
let accordionDiv3 = document.querySelector(".accordionDiv3");
let rotatingArrow1 = document.querySelector(".rotating__arrow1");
let rotatingArrow2 = document.querySelector(".rotating__arrow2");
let rotatingArrow3 = document.querySelector(".rotating__arrow3");
let priceW = document.querySelector("#price__wrapper");

accordion1.addEventListener("click", () => {
  accordionDiv1.classList.toggle("hidden");
  rotatingArrow1.classList.toggle("rotate-180");

  if (accordionDiv1.classList.contains("hidden")) {
    priceW.classList.remove("pb-2");
    priceW.classList.add("lg:pb-5");
  } else {
    priceW.classList.remove("lg:pb-5");
    priceW.classList.add("pb-2");
  }
});
accordion2.addEventListener("click", () => {
  accordionDiv2.classList.toggle("hidden");
  rotatingArrow2.classList.toggle("rotate-180");
});
accordion3.addEventListener("click", () => {
  accordionDiv3.classList.toggle("hidden");
  rotatingArrow3.classList.toggle("rotate-180");
});

// category wrapper in tablet
let filterBtn = document.querySelector("#filter");
let categoryWrapper = document.querySelector("#category");

filterBtn.addEventListener("click", () => {
  // showing the category wrapper

  categoryWrapper.classList.remove("-bottom-[100vh]");
  categoryWrapper.classList.add("bottom-0");

 
  // control scrolling //this was declared in allPages js
  body.classList.add("overflow-hidden");
});
// hiding the category wrapper

greyBg.addEventListener("click", () => {
  categoryWrapper.classList.add("-bottom-[100vh]");
  categoryWrapper.classList.remove("bottom-0");
  // control scrolling
  body.classList.remove("overflow-hidden");
});
// cross icon for closing the category wrapper
let xIcon2 = document.querySelector(".xIcon2");

xIcon2.addEventListener("click", () => {
  categoryWrapper.classList.remove("bottom-0");
  categoryWrapper.classList.add("-bottom-[100vh]");

  greyBg.classList.add("hidden");
  // control scrolling
  body.classList.remove("overflow-hidden");
});
