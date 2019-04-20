const sandwich = document.querySelector(".sandwich");
const navLinks = document.querySelector(".navigation-links");
const links = document.querySelectorAll(".navigation-links li");

sandwich.addEventListener("click" , () => { navLinks.classList.toggle("ok") });