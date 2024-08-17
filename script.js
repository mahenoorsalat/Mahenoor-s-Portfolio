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

    // Toggle opacity of ulNavbar
    if (ulNavbar.classList.contains('v-class')) {
        ulNavbar.style.opacity = '1'; // Set opacity to 1 when v-class is added
        nav.style.height = '252px'; // Set height to 252px when expanded
    } else {
        ulNavbar.style.opacity = '0'; // Set opacity to 0 when v-class is removed
        nav.style.height = '72px'; // Set height back to 72px when collapsed
    }
});

  // Function to load a script asynchronously
  function loadScriptAsync(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
}

// Check if the media query matches
if (window.matchMedia('(max-width: 420px)').matches) {
    loadScriptAsync('path/to/participle.js', function() {
        console.log('participle.js loaded and initialized');
    });
}



