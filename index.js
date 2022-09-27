const menu = document.querySelector(".menu");
const navmanu = document.querySelector(".nav-menu");


menu.addEventListener('click', () => 
{
    menu.classList.toggle("active")
    navmanu.classList.toggle("active")
});


// SCROLL REVEAL

const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:'2000',
    reset:true
})
sr.reveal(".intro",{delay:200});
sr.reveal(".image",{delay:300});
sr.reveal(".project-a");
