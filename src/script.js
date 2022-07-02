// navbar toggle
const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");
const navActive = document.querySelector(".nav-active");

burguer.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

// loop effect art column

let index = 0;

function changeColorLoop() {
  const titleArtArray = document.querySelectorAll(".art-text");

  // titleArtArray[index % 1].classList.toggle("purple");
  titleArtArray[index % 3].classList.toggle("purple");
  index++;
  console.log(titleArtArray[index]);
}

setInterval(changeColorLoop, 1000);
