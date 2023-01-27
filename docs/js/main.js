// JS code...
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const dropdownOpen = document.querySelector(".dropdown-open");
const dropdownOverlay = document.querySelector(".dropdown__menu-overlay");
const dropdown = document.querySelector(".dropdown__menu");
const dropdownList = document.querySelector(".dropdown__menu-list");

dropdownOpen.addEventListener("click", () => {
  dropdownList.classList.add("show");
  dropdown.classList.add("show");
});

dropdownOverlay.addEventListener("click", () => {
  dropdown.classList.remove("show");
  dropdownList.classList.remove("show");
});
