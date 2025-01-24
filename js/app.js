let hamburger = document.querySelector(".hamburger-btn")
let hidden = document.querySelector(".hidden")
let close = document.querySelector(".close-btn")
let bg_del = document.querySelector(".bg_del")

hamburger.addEventListener("click" , function(){
    hidden.style.left = "0"
})
close.addEventListener("click" , function(){
    hidden.style.left = "-160%"
})
bg_del.addEventListener("click" , function(){
    hidden.style.left = "-160%"
})
let btns = document.querySelectorAll(".footer-nav-title");
let texts = document.querySelectorAll(".res-box");

btns.forEach(function (item, index) {
  item.addEventListener("click", function () {
    texts.forEach(function (element, elementindex) {
      element.classList.remove("active");
    });
    texts[index].classList.add("active");
  });
});