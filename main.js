function menu() {
  const menuBtn = document.querySelector(".menu-toggle");
  const menu = document.querySelector("header nav");
  menu.style.height = `${window.innerHeight}px`;
  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    document.body.classList.toggle("menu-active");
  }
}
menu();

function Links() {
  let allLinks = document.querySelectorAll("header a");

  allLinks.forEach((ele) => {
    let name = document.title;
    if (ele.innerHTML === name) {
      allLinks.forEach((e) => e.classList.remove("active"));
      ele.classList.add("active");
    }
  });
}
Links();

function planetsToggle() {
  let planets = document.querySelectorAll(".planet-details");

  let btns = document.querySelectorAll(".toggle-planets li");
  let image = document.querySelector(".planet-image img");

  btns.forEach((ele) => {
    ele.onclick = function () {
      btns.forEach((e) => e.classList.remove("active"));
      this.classList.add("active");
      //
      //
      let btnName = ele.innerHTML;
      planets.forEach((ele) => {
        ele.classList.remove("active");
        if (ele.classList.contains(btnName)) ele.classList.add("active");
      });
      //
      //

      let imageURL = image.getAttribute("src").split("-").slice(0, 1);
      imageURL.splice(1, 0, `-${ele.innerHTML.toLowerCase()}.webp`);
      image.setAttribute("src", imageURL.join(""));
    };
  });
}
planetsToggle();

function modifyImages() {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.alt == "" ? (image.alt = "Image") : "";
  });
}
modifyImages();
