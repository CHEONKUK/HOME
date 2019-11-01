window.onload = () => {
  const headerBg = document.getElementById("bg");
  // console.log(headerBg);
  window.addEventListener("scroll", () => {
    headerBg.style.opacity = 1 - +window.pageYOffset / 550 + "";
    headerBg.style.top = +window.pageYOffset + "px";
    headerBg.style.backgroundPositionY = -+window.pageYOffset / 2 + "px";
  });

  const nav = document.querySelector(".nav");
  const topOfNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.body.classList.add("fixed");
    } else {
      document.body.classList.remove("fixed");
    }
  }
  window.addEventListener("scroll", fixNav);
};
