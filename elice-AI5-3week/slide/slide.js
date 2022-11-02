const wrapper1 = document.querySelector(".wrapper1");
const slides1 = document.querySelector(".slides1");
const slide1 = document.querySelectorAll(".slide1");

const wrapper2 = document.querySelector(".wrapper2");
const slides2 = document.querySelector(".slides2");
const slide2 = document.querySelectorAll(".slide2");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let currentSlide1 = 0;

setInterval(() => {
  let from = -(1300 * currentSlide1);
  let to = from - 1300;

  slides1.animate(
    {
      marginLeft: [from + "px", to + "px"],
    },
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );

  currentSlide1++;

  if (currentSlide1 === slide1.length - 1) {
    currentSlide1 = -1;
  }
}, 3000);

let currentSlide2 = 0;
slides2.style.width = 5200 + "px";

function moveSlide(num) {
  slides2.style.left = -num * 1300 + "px";
  currentSlide2 = num;
}

left.addEventListener("click", function () {
  if (currentSlide2 !== 0) moveSlide(currentSlide2 - 1);
});

right.addEventListener("click", function () {
  if (currentSlide2 !== 3) moveSlide(currentSlide2 + 1);
});
