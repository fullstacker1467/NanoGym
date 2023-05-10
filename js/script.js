const humb = document.querySelector(".humb");
const ul = document.querySelector("#ulmenu");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

humb.addEventListener("click", () => {
  body.classList.toggle("active");
  ul.classList.toggle("active");
});

$(window).on("load", function () {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});

AOS.init({
  duration: 1200,
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
