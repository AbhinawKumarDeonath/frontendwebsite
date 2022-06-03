const menu = document.querySelector(".menu");
const navmanu = document.querySelector(".nav-menu");


menu.addEventListener('click', () => 
{
    menu.classList.toggle("active")
    navmanu.classList.toggle("active")
});

