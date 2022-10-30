
const search = document.getElementById("search");
const cart = document.getElementById("cart");
const header_info = document.getElementById("header_info");
const dj = document.getElementById("dj");
const body = document.querySelector("body")
const burger = document.getElementById("burger");
const sliders = document.getElementById("sliders");


search.addEventListener("click", function () {
    header_info.classList.toggle("active");
    dj.classList.remove("slide");
    sliders.classList.remove("on");
})


cart.addEventListener("click", function () {
    dj.classList.toggle("slide");
    header_info.classList.remove("active");
    sliders.classList.remove("on");
})

burger.addEventListener("click", function(){
    sliders.classList.toggle("on");
    header_info.classList.remove("active");
    dj.classList.remove("slide");
})

window.addEventListener("scroll", function(){
    dj.classList.remove("slide");
    sliders.classList.remove("on");
    header_info.classList.remove("active");
})

var typed = new Typed(".typing", {
    strings:["","MORNING","EVENING","ALL-DAY"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})

























search.addEventListener("scroll", function () {
    header_info.classList.remove("active");
})