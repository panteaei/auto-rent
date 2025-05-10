// navigation bar 
// click on hamb 
let hambIcon = document.querySelector("#hamb")
let menu = document.querySelector("#menu")
let greyBg = document.querySelector("#greyBg")
hambIcon.addEventListener("click" , () =>{
menu.classList.remove("-right-full")
menu.classList.add("right-0")
greyBg.classList.remove("hidden")
})
// click on x 
let xIcon = document.querySelector("#xIcon")
xIcon.addEventListener("click" , ()=> {
    menu.classList.remove("right-0")
menu.classList.add("-right-full")
greyBg.classList.add("hidden")


})
// click on body (greyBg)
greyBg.addEventListener("click" , ()=>{
    menu.classList.remove("right-0")
menu.classList.add("-right-full")
greyBg.classList.add("hidden")


})

// customazing the select element in reserving
// const locSelect = document.getElementById("location__select") 
// const locArrow = document.getElementById("location__arrow")
// const locList = document.getElementById("location__list")
// const header = document.getElementById("header")
// locSelect.addEventListener("click" , ()=>{
   
//     locList.classList.toggle("hidden")
//     // rotating the arrow 
//     locArrow.classList.toggle("rotate-180")
// })
// header.addEventListener("click" , ()=> {
   
// if (!locList.classList.contains("hidden")) {
//     locList.classList.add("hidden")
// }
   
// })

  const locationSelect = document.getElementById('location__select');
  const locationList = document.getElementById('location__list');
  const locationArrow = document.getElementById('location__arrow');
  const locationInput = document.getElementById("location__input")

  // نمایش/مخفی کردن لیست با کلیک روی select
  locationSelect.addEventListener('click', function(e) {
    e.stopPropagation(); // جلوگیری از بسته شدن فوری
    locationList.classList.toggle('hidden');
    locationArrow.classList.toggle('rotate-180');
  });

  // بستن لیست با کلیک در هر جای دیگر صفحه
  document.addEventListener('click', function(e) {
    if (!locationSelect.contains(e.target)) {
      locationList.classList.add('hidden');
      locationArrow.classList.remove('rotate-180');
    }
  });

  // انتخاب آیتم از لیست
  locationList.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function() {
 
      locationInput.value = item.textContent;
      locationList.classList.add('hidden');
      locationArrow.classList.remove('rotate-180');
    });
  });







 






