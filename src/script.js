// navbar toggle
const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");
const navActive = document.querySelector(".nav-active");

burguer.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
