let menubutton = document.querySelector('.icon');
let menuMobile = document.querySelector('.mobileMenu');
menubutton.addEventListener('click', (e) => {
    if (menuMobile.style.display === 'block') {
        menuMobile.style.display = 'none';
    }
    else {
        menuMobile.style.display = 'block';
    }
});
//# sourceMappingURL=home.js.map