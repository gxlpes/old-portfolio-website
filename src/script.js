////////////////////////////////// navbar toggle
const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");
const navActive = document.querySelector(".nav-active");

burguer.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

////////////////////////////////// loop effect art column
let index = 0;

function changeColorLoop() {
  const titleArtArray = document.querySelectorAll(".art-text");
  titleArtArray[index % 3].classList.toggle("colored");
  index++;
}

setInterval(changeColorLoop, 1000);

////////////////////////////////// toggle dark theme
const btnTheme = document.querySelector(".change-theme");
const navSVGLight = document.querySelector(".change-theme-svg-light-mode");
const navSVGDark = document.querySelector(".change-theme-svg-dark-mode");
btnTheme.addEventListener("click", () => {
  document.body.classList.contains("light-mode") ? enableDarkMode() : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");
  navSVGLight.classList.add("hiddden");
  navSVGDark.classList.remove("hiddden");
}

function enableLightMode() {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
  navSVGLight.classList.remove("hiddden");
  navSVGDark.classList.add("hiddden");
}
