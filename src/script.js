// navbar toggle
const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");
const navActive = document.querySelector(".nav-active");

burguer.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

// create binaryNumbers on load

function createBinary() {
  let randomCounter = Math.floor(Math.random() * 10);
  let binaryNumbersArray = [];
  let binaryNumber = 0;

  for (var c = 0; c < randomCounter; c++) {
    binaryNumber = Math.random() >= 0.5 ? 1 : 0;
    binaryNumbersArray.push(binaryNumber);
  }
  wholeBinaryNumber = binaryNumbersArray.join("");
}

const div = document.querySelector(".parallax");

function createLayer() {
  for (var n = 0; n <= 45; n++) {
    createBinary();
    const layer = document.createElement("span");
    layer.textContent = `${wholeBinaryNumber}`;
    layer.classList.add("layer");
    layer.setAttribute("data-speed", "-5");
    div.appendChild(layer);
  }
}
createLayer();

// parallax effect

function randomize() {
  let r;
  let list = document.querySelectorAll("span");
  for (let i = 0; i < list.length; i++) {
    list.forEach((list) => {
      r = Math.floor(Math.random() * 1000);
      list.style.top = r + "px";
    });
  }
  for (let i = 0; i < list.length; i++) {
    list.forEach((list) => {
      r = Math.floor(Math.random() * 1000);
      list.style.left = r + "px";
    });
  }
  for (let i = 0; i < list.length; i++) {
    list.forEach((list) => {
      r = Math.floor(Math.random() * 100);
      list.style.right = r + "px";
    });
  }
}

randomize();

document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".layer").forEach((shift) => {
    const position = shift.getAttribute("data-speed");
    const x = (window.innerWidth - event.pageX * position) / 500;
    const y = (window.innerHeight - event.pageY * position) / 500;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// loop effect art column

let index = 0;

function changeColorLoop() {
  const titleArtArray = document.querySelectorAll(".art-text");

  // titleArtArray[index % 1].classList.toggle("purple");
  titleArtArray[(index + 1) % 3].classList.toggle("purple");
  index++;
  console.log(titleArtArray[index]);
}

setInterval(changeColorLoop, 1000);
