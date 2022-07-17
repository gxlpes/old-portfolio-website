const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll("[data-anime");
const animationClass = "animate";

function animeOnScroll() {
  const windowTop = window.pageYOffset + window.innerHeight * 0.75;
  target.forEach((el) => {
    if (windowTop > el.offsetTop) {
      el.classList.add(animationClass);
    }
  });
}

animeOnScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeOnScroll();
    }),
    200
  );
}
