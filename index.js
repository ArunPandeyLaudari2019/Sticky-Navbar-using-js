window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.pageYOffset >= 190) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
