const menuBtn = document.querySelector('.menu-bars');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.getElementsByClassName('nav-link');
const menuBars = document.getElementsByClassName('bar');


function toggleNavbar(event) {
    if (navContainer.classList.contains('navbar-active')) {
        navContainer.classList.replace('nav-container-slide-bottom', 'nav-container-slide-top');
    }
    else {
        navContainer.classList.replace('nav-container-slide-top', 'nav-container-slide-bottom');
    }
    navContainer.classList.toggle('navbar-active');
    [...menuBars].forEach((bar, i) => {                        // to toggle the X mark
        bar.classList.toggle(`bar${i + 1}-change`);
    });
}



// EventListeners
menuBtn.addEventListener('click', toggleNavbar);
[...navLinks].forEach(nav => {
    nav.addEventListener('click', toggleNavbar);
});
