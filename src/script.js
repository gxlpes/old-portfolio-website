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
const btnNav = document.querySelectorAll(".btn-nav");
const imgDark = document.querySelector(".dark-mode-img");
const imgLight = document.querySelector(".light-mode-img");

btnTheme.addEventListener("click", () => {
  document.body.classList.contains("light-mode") ? enableDarkMode() : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light-mode");
  navSVGDark.classList.remove("hiddden");
  imgDark.classList.remove("hidden-img");

  btnNav.forEach((btn) => btn.classList.add("dark-mode-btn"));
  document.body.classList.add("dark-mode");
  navSVGLight.classList.add("hiddden");
  imgLight.classList.add("hidden-img");
}

function enableLightMode() {
  document.body.classList.remove("dark-mode");
  btnNav.forEach((btn) => btn.classList.remove("dark-mode-btn"));
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
  document.body.classList.contains("en") ? enablePortuguese() : enableEnglish();
});

function enablePortuguese() {
  document.body.classList.remove("en");
  btnPortuguese.classList.remove("hiddden");

  btnEnglish.classList.add("hiddden");
  document.body.classList.add("pt");
}

function enableEnglish() {
  document.body.classList.remove("pt");
  btnEnglish.classList.remove("hiddden");

  btnPortuguese.classList.add("hiddden");
  document.body.classList.add("en");
}

////////////////////////////////// different lang
const navTitle = document.querySelectorAll(".nav-link");
const subTitle = document.querySelector(".subtitle");

btnLang.addEventListener("click", () => {
  const attr = (btnEnglish.classList.contains("hiddden") ? btnPortuguese : btnEnglish).getAttribute("language");

  console.log(attr);

  navTitle.forEach((el, index) => (el.textContent = data[attr].navbar[index]));
  subTitle.textContent = data[attr].subtitle;
});

let data = {
  english: {
    navbar: ["Projects", "About", "Contact"],
    subtitle: "Web developer",
  },
  portuguese: {
    navbar: ["Projetos", "Sobre", "Contato"],
    subtitle: "Desenvolvedor Web",
  },
};
