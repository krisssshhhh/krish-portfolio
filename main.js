const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  // Collapse the nav menu only if a link (anchor tag) is clicked
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// About container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// Skills section
ScrollReveal().reveal(".skills__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".skills__container .service__card", {
  ...scrollRevealOption,
  interval: 200,
});

// Services
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 300,
});

// Portfolio
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 200,
});