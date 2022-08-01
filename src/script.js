////////////////////////////////// navbar toggle
const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");
const navActive = document.querySelector(".nav-active");

burguer.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burguer.classList.toggle("toggle");
});

////////////////////////////////// loop effect art column
let variab = 0;

function changeColorLoop() {
  const titleArtArray = document.querySelectorAll(".art-text");
  titleArtArray[variab % 3].classList.toggle("colored");
  variab++;
}

setInterval(changeColorLoop, 1000);

////////////////////////////////// toggle dark theme
const btnTheme = document.querySelector(".change-theme");
const navSVGLight = document.querySelector(".change-theme-svg-light-mode");
const navSVGDark = document.querySelector(".change-theme-svg-dark-mode");
const btnNav = document.querySelectorAll(".btn-nav");
const imgDark = document.querySelector(".dark-mode-img");
const imgLight = document.querySelector(".light-mode-img");

const container = document.querySelectorAll(".container");
const containerProject = document.querySelectorAll(".container-project-main");

btnTheme.addEventListener("click", () => {
  enableDarkMode();
});

function enableDarkMode() {
  navSVGLight.classList.toggle("hiddden");

  setTimeout(function () {
    btnTheme.style.flexDirection = "row-reverse";
  }, 300);

  setTimeout(function () {
    navSVGDark.classList.remove("hiddden");
  }, 250);

  document.body.classList.remove("light-mode");
  imgDark.classList.remove("hidden-img");

  btnNav.forEach((btn) => btn.classList.toggle("dark-mode-btn"));
  container.forEach((container) => container.classList.toggle("dark-container"));
  containerProject.forEach((container) => container.classList.toggle("dark-container"));

  document.body.classList.toggle("dark-mode");
  imgLight.classList.toggle("hidden-img");
}

////////////////////////////////// toggle tooltip

const svgEmail = document.querySelectorAll(".email");
const tooltip = document.querySelectorAll(".tooltip");
const tooltipNormal = document.querySelectorAll(".bottom");

for (let i = 0; i < svgEmail.length; i++) {
  svgEmail[i].addEventListener("click", function () {
    myFunction();
    tooltipNormal[i].classList.add("visible");
    setTimeout(() => {
      tooltipNormal[i].classList.remove("visible");
    }, 1000);
  });
}

function myFunction() {
  var copyText = document.getElementById("emailInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // mobile devices
  navigator.clipboard.writeText(copyText.value);
}

////////////// projects manage state

const buttonOpen = document.querySelectorAll(".open-project");

for (let i = 0; i < buttonOpen.length; i++) {
  buttonOpen[i].addEventListener("click", function () {
    this.classList.toggle("open-project-active");
    const projectContainerHidden = document.querySelectorAll(".hidden-project");
    projectContainerHidden[i].classList.toggle("hidden-remove");
  });
}
