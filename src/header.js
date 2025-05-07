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
