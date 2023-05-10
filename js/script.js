const humb = document.querySelector(".humb");
const ul = document.querySelector("#ulmenu");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const bottom = document.querySelector(".third .container .bottom");

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

let cardData = [
  {
    icon: "fa-solid fa-dumbbell",
    title: "QUALITY EQUIPMENT",
    description:
      "The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
  },
  {
    icon: "fa-solid fa-heart-pulse",
    title: "HEALTH CARING",
    description:
      "The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
  },
  {
    icon: "fa-solid fa-stopwatch",
    title: "GYM STRATEGIES",
    description:
      "The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
  },
];

cardData.forEach((item) => {
  bottom.innerHTML += `
  <div class="card" data-aos="fade-up">
  <i class="${item.icon}"></i>
  <h3>${item.title}</h3>
  <p>${item.description}</p>
  <a href="html/service.html">DISCOVER MORE ABOUT US <i class="fa-solid fa-arrow-right"></i></a>
</div>
    `;
});
