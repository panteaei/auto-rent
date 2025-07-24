// navigation bar
// click on hamb
let hambIcon = document.querySelector(".hamb");
let menu = document.querySelector(".menu");
let greyBg = document.querySelector(".greyBg");
let body = document.querySelector("body");
hambIcon.addEventListener("click", () => {
  menu.classList.remove("-right-full");
  menu.classList.add("right-0");
  greyBg.classList.remove("hidden");
    // control scrolling
  body.classList.add("overflow-hidden");
});
// click on x
let xIcon = document.querySelector(".xIcon");
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
let searchBtn = document.querySelector(".searchBtn");
let searchW = document.querySelector(".searchWrapper");
let loginBox = document.querySelector(".loginBox");

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
let bin = document.querySelector(".bin");
let searchH = document.querySelector(".searchH");
bin.addEventListener("click", () => {
  searchH.classList.add("hidden");
});
//  آزمایشی فعلا هیستوری باشه
searchH.classList.remove("hidden")

// opening the search wrapper in mobile and tablet  
let serachWMobile = document.querySelector("#group-search")
serachWMobile.addEventListener("click" , ()=>{
    searchW.classList.remove("hidden");
  searchW.classList.add("flex");

  // control scrolling
  body.classList.add("overflow-hidden");
})



// closing the search wrapper in mobile and tablet with closing btn 
let closeBtn = document.querySelector("#closeBtn")
closeBtn.addEventListener("click" , ()=> {
    greyBg.classList.add("hidden");
  searchW.classList.remove("flex");
  searchW.classList.add("hidden");
  loginBox.classList.remove("md:hidden");
  loginBox.classList.add("md:block");
  menu.classList.remove("hidden");
  // control scrolling
  body.classList.remove("overflow-hidden");
})


