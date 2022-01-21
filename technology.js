const textsHolder = document.querySelectorAll(".all-texts .text");
const imagesHolder = document.querySelectorAll(".flex-right img");
const numbersToggle = document.querySelectorAll(".numbers-toggle span");

// settting images on mobile and tablet
// if (window.innerWidth < 992) {
//   imagesHolder.forEach((img) => {
//     img.src = img.src.replace("portrait", "landscape");
//   });
// }

numbersToggle.forEach((btn, index) => {
  btn.addEventListener("click", () => change(btn, index));
});

function change(btn, index) {
  numbersToggle.forEach((e) => e.classList.remove("active"));
  btn.classList.add("active");
  imagesHolder.forEach((e) => e.classList.remove("active"));
  imagesHolder[index].classList.add("active");
  textsHolder.forEach((e) => e.classList.remove("active"));
  textsHolder[index].classList.add("active");
}

setInterval(() => {
  // indicating current index
  let btn;
  numbersToggle.forEach((e) => {
    e.classList.contains("active") ? (btn = e) : "";
  });

  let index = Array.from(numbersToggle).indexOf(btn);

  // the next index to slide to

  let nextIndex = index + 1;
  nextIndex == numbersToggle.length ? (nextIndex = 0) : "";

  let nextBtn = Array.from(numbersToggle)[nextIndex];

  // calling the function with the next indices
  change(nextBtn, nextIndex);
}, 10000);
