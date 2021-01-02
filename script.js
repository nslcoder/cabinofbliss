const navbar = document.querySelector("nav");
const ham = document.querySelector(".ham");

ham.addEventListener("click", toggleHam);

function toggleHam() {
    navbar.classList.toggle("showNav");
}
