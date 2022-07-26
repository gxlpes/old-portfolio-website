////////////////////////////////// navbar toggle
const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");
const navActive = document.querySelector(".nav-active");

burguer.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burguer.classList.toggle("toggle");
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
const btnNav = document.querySelectorAll(".btn-nav");
const imgDark = document.querySelector(".dark-mode-img");
const imgLight = document.querySelector(".light-mode-img");

const container = document.querySelectorAll(".container");
const containerProject = document.querySelectorAll(".container-project-main");

btnTheme.addEventListener("click", () => {
  document.body.classList.contains("light-mode") ? enableDarkMode() : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light-mode");
  navSVGDark.classList.remove("hiddden");
  imgDark.classList.remove("hidden-img");

  btnNav.forEach((btn) => btn.classList.add("dark-mode-btn"));
  container.forEach((container) => container.classList.add("dark-container"));
  containerProject.forEach((container) => container.classList.add("dark-container"));

  document.body.classList.add("dark-mode");
  navSVGLight.classList.add("hiddden");
  imgLight.classList.add("hidden-img");
}

function enableLightMode() {
  document.body.classList.remove("dark-mode");

  btnNav.forEach((btn) => btn.classList.remove("dark-mode-btn"));
  container.forEach((container) => container.classList.remove("dark-container"));

  navSVGLight.classList.remove("hiddden");
  imgLight.classList.remove("hidden-img");

  document.body.classList.add("light-mode");
  navSVGDark.classList.add("hiddden");
  imgDark.classList.add("hidden-img");
}

////////////////////////////////// toggle language
const btnLang = document.querySelector(".change-lang");
const btnEnglish = document.querySelector(".lang-en");
const btnPortuguese = document.querySelector(".lang-pt");

btnLang.addEventListener("click", () => {
  btnEnglish.classList.contains("hiddden") ? enablePortuguese() : enableEnglish();
});

function enablePortuguese() {
  btnEnglish.classList.remove("hiddden");
  btnPortuguese.classList.add("hiddden");
}

function enableEnglish() {
  btnPortuguese.classList.remove("hiddden");
  btnEnglish.classList.add("hiddden");
}

////////////////////////////////// toggle tooltip

const svgEmail = document.querySelectorAll(".email");
const tooltip = document.querySelector(".tooltip");
const tooltipNormal = document.querySelector(".left");

svgEmail.forEach((el) => {
  tooltip.addEventListener("click", () => {
    myFunction();
    tooltipNormal.classList.add("visible");
    setTimeout(() => {
      tooltipNormal.classList.remove("visible");
    }, 1000);
  });
});

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
    const svgProject = document.querySelectorAll(".project1-svg");
    const imgProject = document.querySelectorAll(".project1-img");

    projectContainerHidden[i].classList.toggle("hidden-remove");
  });
}
