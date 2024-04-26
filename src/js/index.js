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

// Toggle class active untuk hamburger menu
const navbarNavigasi = document.querySelector(".text-hilang");

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add("hidden");
    } else {
        // Scrolling up
        navbar.classList.remove("hidden");
    }

    lastScrollTop = currentScrollTop;
});


document.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;

  const sections = {
    home: document.querySelector('#home').offsetTop,
    about: document.querySelector('#about').offsetTop,
    skills: document.querySelector('#skills').offsetTop,
    contact: document.querySelector('#contact').offsetTop
  };

  const navbarLinks = document.querySelectorAll('.navbar-navigasi a');

  // Hapus kelas 'active' dari semua tautan
  navbarLinks.forEach((link) => {
    link.classList.remove('active');
  });

  // Tentukan posisi scroll untuk menentukan bagian aktif
  if (scrollPos < sections.about) {
    document.querySelector('a[href="#home"]').classList.add('active');
  } else if (scrollPos < sections.skills) {
    document.querySelector('a[href="#about"]').classList.add('active');
  } else if (scrollPos < sections.contact) {
    document.querySelector('a[href="#skills"]').classList.add('active');
  } else {
    document.querySelector('a[href="#contact"]').classList.add('active');
  }
});
