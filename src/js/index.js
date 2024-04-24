let typedTitle = new Typed(".typing-title", {
  strings: [
    "Rozan Nouval",
    "Welcome in My Portfolio Website",
    "I am a Student at SMK Yadika Soreang",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll down
      document.getElementById("navbar").style.top = "-60px"; // Hide navbar
    } else {
      // Scroll up
      document.getElementById("navbar").style.top = "0"; // Show navbar
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  },
  false
);