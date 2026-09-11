// Dynamic Footer: Set Copyright Year and Last Modified Date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Mobile Navigation Hamburger Interaction
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    // Toggle the classes to shift visibility styles from temples.css
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
});
