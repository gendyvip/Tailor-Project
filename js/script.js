var preloader = document.getElementsByClassName("preloader")[0];
var hero = document.getElementById("header-1")
var para = document.getElementById("parag")
var btn = document.getElementsByClassName("our-services")[0]
var offers = document.getElementsByClassName("offer")
var services = document.getElementsByClassName("serv")
var leftArrow = document.getElementsByClassName("arrow")[0]
var rightArrow = document.getElementsByClassName("arrow")[1]
var slider = document.getElementsByClassName("slid")
var id1 = document.getElementById("id1")
var id2 = document.getElementById("id2")

window.onload = function () {
  setTimeout(function () {
    preloader.style.opacity = 0;
    preloader.style.transition = "opacity 0.3s ease";
    setTimeout(function () {
      preloader.style.display = "none";

    }, 400)
    hero.style.animation = "fadeInLeft 0.4s"
    para.style.animation = "fadeInLeft 0.6s"
    btn.style.animation = "fadeInLeft 0.8s"
  }, 1000)
}
var header = document.getElementById("header")
window.onscroll = function () {
  if (scrollY > 440) {
    header.style.position = "fixed"
    header.style.animation = "fadeInDown 1s"
    offers[0].style.animation = "fadeInUp 1s 0.4s forwards"
    offers[1].style.animation = "fadeInUp 1s 0.6s forwards"
    offers[2].style.animation = "fadeInUp 1s 0.8s forwards"
  }
  else {
    header.style.position = "static"
  }
  if (scrollY > 1840) {
    services[0].style.animation = "fadeInUp 1s 0.2s forwards"
    services[1].style.animation = "fadeInUp 1s 0.4s forwards"
    services[2].style.animation = "fadeInUp 1s 0.6s forwards"
    services[3].style.animation = "fadeInUp 1s 0.8s forwards"
  }
}


var slideActive = document.getElementsByClassName("slide-move")
var active = document.getElementsByClassName("active")[0]
var move = document.getElementsByClassName("move")
var i = 0
function right() {
    slideActive[1 - i].style.animation = "slide-right 1s forwards";
    slideActive[i].style.animation = "slide-right2 1s forwards";
    slideActive[1 - i].classList.toggle("slide-active");
    slideActive[i].classList.toggle("slide-active");
    move[1 - i].classList.toggle("active");
    move[i].classList.toggle("active");
    i++
    i %= 2
}

function left() {
    slideActive[1 - i].style.animation = "slide-left2 1s forwards";
    slideActive[i].style.animation = "slide-left 1s forwards";
    slideActive[1 - i].classList.toggle("slide-active");
    slideActive[i].classList.toggle("slide-active");
    move[1 - i].classList.toggle("active");
    move[i].classList.toggle("active");
    i++
    i %= 2
}

setInterval(right, 4000)