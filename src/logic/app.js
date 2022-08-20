//? To make mobile nav visible

const hamburgerContainer = document.querySelector(".hamburger-container");
const navBar = document.getElementById("nav");
const rightContainer = document.querySelector(".right");
const leftContainer = document.querySelector(".left");


hamburgerContainer.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("cross");
  navBar.classList.toggle("show-nav");
  rightContainer.classList.toggle("right-slide-in")
  leftContainer.classList.toggle("left-slide-in")
});

//? to make navbar sticky

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky-nav", window.scrollY > 0);
});
