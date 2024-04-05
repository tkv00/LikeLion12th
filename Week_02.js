const barsBtn = document.querySelector(".navbar__bars");
const menu = document.querySelector(".navbar__menu");
const links = document.querySelector(".navbar__links");

function barsEvent() {
  console.log("barsClick");
  menu.classList.toggle("active");
  links.classList.toggle("active");
}

barsBtn.addEventListener("click", barsEvent);
