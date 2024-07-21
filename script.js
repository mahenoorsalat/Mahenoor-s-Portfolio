var typed = new Typed('.text', {
    strings: ['Front-End Developer', 'Web Developer', 'Freelancer', 'Designer', 'SEO Specialist', 'Front-end development educator'],
    typeSpeed: 25,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
});
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const ulNavbar = document.querySelector('.ul-navbar');

hamburger.addEventListener('click', () => {
    ulNavbar.classList.toggle('v-class');
    nav.classList.toggle('h-nav-expanded'); 

    if (nav.classList.contains('h-nav-expanded')) {
        nav.style.height = '472px'; // Set height to 472px when expanded
    } else {
        nav.style.height = '72px'; // Set height back to 72px when collapsed
    }
});




