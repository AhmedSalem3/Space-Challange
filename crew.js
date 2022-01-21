let dots = document.querySelectorAll(".dots span");
let images = document.querySelectorAll(".crew-images img");
let text = document.querySelectorAll(".crew .slider-details");

console.log(text);
console.log(images);
console.log(dots);

dots.forEach((dot) => {
  dot.addEventListener("click", showContent);
});

function showContent(e) {
  let dotIndex = Array.from(dots).indexOf(this);
  dots.forEach((dot) => dot.classList.remove("active"));
  this.classList.add("active");

  replaceClasses(dotIndex);
}

setInterval(() => {
  let currentIndex;
  dots.forEach((dot) => {
    if (dot.classList.contains("active"))
      currentIndex = Array.from(dots).indexOf(dot);
  });
  currentIndex += 1;
  if (currentIndex == 4) currentIndex = 0;

  replaceClasses(currentIndex, true);
}, 10000);

function replaceClasses(index, changeDot) {
  if (changeDot) {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  images.forEach((image) => image.classList.remove("active"));
  images[index].classList.add("active");

  text.forEach((text) => text.classList.remove("active"));
  text[index].classList.add("active");
}
