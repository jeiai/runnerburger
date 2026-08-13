// Menú móvil y visor de galería.
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const galleryButtons = Array.from(document.querySelectorAll(".gallery-button"));
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrev = document.querySelector("[data-lightbox-prev]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
let activeGalleryIndex = 0;

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

function renderLightbox() {
  const activeButton = galleryButtons[activeGalleryIndex];
  const activeImage = activeButton?.querySelector("img");
  const activeCaption = activeButton?.closest(".gallery-item")?.querySelector("figcaption");

  if (!activeImage || !lightboxImage || !lightboxCaption) {
    return;
  }

  lightboxImage.src = activeImage.src;
  lightboxImage.alt = activeImage.alt;
  lightboxCaption.textContent = activeCaption?.textContent || activeImage.alt;
}

function openLightbox(index) {
  activeGalleryIndex = index;
  renderLightbox();
  document.body.classList.add("lightbox-open");
  lightbox?.classList.add("is-open");
  lightbox?.setAttribute("aria-hidden", "false");
  lightboxClose?.focus();
}

function closeLightbox() {
  document.body.classList.remove("lightbox-open");
  lightbox?.classList.remove("is-open");
  lightbox?.setAttribute("aria-hidden", "true");
}

function showPreviousImage() {
  activeGalleryIndex = (activeGalleryIndex - 1 + galleryButtons.length) % galleryButtons.length;
  renderLightbox();
}

function showNextImage() {
  activeGalleryIndex = (activeGalleryIndex + 1) % galleryButtons.length;
  renderLightbox();
}

galleryButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    openLightbox(index);
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", showPreviousImage);
lightboxNext?.addEventListener("click", showNextImage);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  const isLightboxOpen = lightbox?.classList.contains("is-open");

  if (event.key === "Escape") {
    closeMenu();
    closeLightbox();
  }

  if (!isLightboxOpen) {
    return;
  }

  if (event.key === "ArrowLeft") {
    showPreviousImage();
  }

  if (event.key === "ArrowRight") {
    showNextImage();
  }
});
