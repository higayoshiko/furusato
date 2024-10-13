document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav ul li");

  burger.addEventListener("click", () => {
    // Toggle navigation
    nav.classList.toggle("nav-active");
    nav.classList.toggle("show");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger animation
    burger.classList.toggle("toggle");
  });
});

const carouselContainer = document.querySelector(".carousel-container");
const carouselImages = document.querySelectorAll(".carousel-image");
const leftButton = document.querySelector(".carousel-arrow-left");
const rightButton = document.querySelector(".carousel-arrow-right");
const openPopupBtn = document.getElementById("subscribeBtn");
const popupContainer = document.getElementById("popupContainer");
const imageContainer = document.querySelector(".image-container");
const exitButton = popupContainer.querySelector(".exit");
const form = popupContainer.querySelector("form");
let currentIndex = 0;

leftButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel();
});

rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateCarousel();
});

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

openPopupBtn.addEventListener("click", () => {
  popupContainer.style.display = "block";
});

popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});

// Add a click event listener to the exit button
exitButton.addEventListener("click", () => {
  // Hide the pop-up container
  popupContainer.style.display = "none";
});

// Changing text in form after subscribing

// Get the name and email input elements
const nameInput = form.querySelector("#name");
const emailInput = form.querySelector("#email");

// Get the heading and form elements
const headingform = popupContainer.querySelector(".formh2");
const formp = popupContainer.querySelector(".formp");
// const formContainer = popupContainer.querySelector('form');

// Get the subscribe button element
const subscribeButton = form.querySelector(".submitBtn");

// Add a click event listener to the subscribe button
subscribeButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  // Check if name and email fields are filled
  if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
    // Change the heading text
    headingform.textContent = "Subscribed!";
    formp.textContent = "Thank you for signing up to our newsletter!";

    // Hide the form
    form.style.display = "none";
  }
});
