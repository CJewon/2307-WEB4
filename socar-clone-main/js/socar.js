const headerScroll = document.querySelector("header");
let 이전좌표 = 0;

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY >= 100) {
    headerScroll.classList.add("scrolled");
  } else {
    headerScroll.classList.remove("scrolled");
  }

  if (이전좌표 < scrollY) {
    headerScroll.classList.add("hide");
  } else {
    headerScroll.classList.remove("hide");
  }

  이전좌표 = scrollY;
});

const countScroll = document.querySelector("#start-together");
const counter = document.querySelector(".count-up");
const goal = 8286684;
const countDuration = 1000;
const framePerSec = 144;
let bool = false;

window.addEventListener("scroll", () => {
  const 시작좌표 = countScroll.getBoundingClientRect().top - window.innerHeight;

  console.log(
    "탑",
    countScroll.getBoundingClientRect().top - window.innerHeight
  );
  console.log(
    "바텀",
    countScroll.getBoundingClientRect().bottom - window.innerHeight
  );

  const sectionHeight = countScroll.scrollHeight;
  const 시작좌표백분율 = -(시작좌표 / sectionHeight) * 100;
  // console.log(시작좌표백분율);

  if (시작좌표백분율 >= 27 && 시작좌표백분율 <= 29) {
    countUp();
  }
});

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

const 진행횟수 = (countDuration * framePerSec) / 1000;

function countUp() {
  for (let i = 0; i < 진행횟수; i++) {
    const 진행도 = i / (진행횟수 - 1);
    setTimeout(() => {
      counter.innerText = parseInt(easeOutCubic(진행도) * goal);
    }, (countDuration / 진행횟수) * (i + 1));
  }
}
