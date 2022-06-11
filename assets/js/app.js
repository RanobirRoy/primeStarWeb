const navItems = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
    navItems.classList.toggle("nav-active");
});
