function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
  }

  requestAnimationFrame(animation);
}

smoothScroll(".aHome", 1000);

// jQuery Smooth Scroll

// $(".navbar a").on("click", function(e) {
//   if (this.hash !== "") {
//     e.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800
//     );
//   }
// });
