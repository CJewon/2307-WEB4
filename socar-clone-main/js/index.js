const header = document.querySelector("header");
let 이전좌표 = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  //scroll 이벤트리스너일때
  //스크롤을 올렸는지 내렸는지 파악하려면
  //변수를 하나 선언 해야 한다.
  if (이전좌표 < window.scrollY) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  이전좌표 = window.scrollY;
});

const scrollContent = document.querySelectorAll(".advantage > *");
makeScrollContents(scrollContent);

makeCountUp(document.querySelector(".count-up"), 8985351, 4000, 24);

const incline = document.querySelector(".incline");

incline.style.left = "50%";

window.addEventListener("scroll", () => {
  if (incline.getBoundingClientRect().top - window.innerHeight < 0) {
    incline.style.left = "0%";
  }
});

const hambergerButton = document.querySelector(".hamberger");
const hambergerClick = document.querySelector(".hamberger-click");
const hambergerNav = document.querySelector(".hamberger-nav");
const hambergerTransition = 500; // 0.5초를 뜻하는 시간설정

hambergerButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (hambergerButton.classList.contains("active")) {
    // 열려있을때
    closeHamberger(hambergerTransition);
  } else {
    openHamberger();
  }
});

window.addEventListener("scroll", () => {
  if (hambergerButton.classList.contains("active")) closeHamberger();
});

hambergerNav.style.transition = `${hambergerTransition}ms`;

function openHamberger() {
  hambergerButton.classList.add("active");
  hambergerClick.classList.add("active");

  setTimeout(() => {
    hambergerNav.style.transform = `none`;
  }, 1);
}

function closeHamberger(transition) {
  hambergerButton.classList.remove("active");
  hambergerNav.style.transform = `translateX(100%)`;

  setTimeout(() => {
    hambergerClick.classList.remove("active");
  }, transition);
}
