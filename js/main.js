// Menú móvil y mejoras pequeñas de navegación.
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

function closeMenu() {
  document.body.classList.remove("nav-open");
  navMenu?.classList.remove("is-open");
  navToggle?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  document.body.classList.toggle("nav-open", !isOpen);
  navMenu?.classList.toggle("is-open", !isOpen);
  navToggle.classList.toggle("is-open", !isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
