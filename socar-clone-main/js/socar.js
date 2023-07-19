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
  console.log(이전좌표);
  console.log(scrollY);
  이전좌표 = scrollY;
  100;
  console.log(이전좌표);
  console.log(scrollY);
});
