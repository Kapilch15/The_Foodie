//NAVBAR TOGGLE
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// active navbar style
const nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

//counter

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let Obj = document.getElementById(id);
    current = start;
    range = end - start;
    (increment = end > start ? 1 : -1),
      (step = Math.abs(Math.floor(duration / range))),
      (timmer = setInterval(() => {
        current += increment;
        Obj.textContent = current;
        if (current == end) {
          clearInterval(timmer);
        }
      }, step));
  }

  counter("count1", 0, 3230, 3000);
  counter("count2", 100, 3700, 3000);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7630, 3000);
});

console.log("TESt");
