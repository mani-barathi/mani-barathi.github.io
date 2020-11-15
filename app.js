// Navbar and Hamburger Menu
const menuBtn = document.querySelector('.menu-bars');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.getElementsByClassName('nav-link');
const menuBars = document.getElementsByClassName('bar');
// Projects
const projectItems = document.querySelectorAll('.project-item');

function animateIntroText(){
    let greetingTextEl = document.querySelector('.greeting-text');
    let nameTextEl = document.querySelector('.name-text');
    let nameText = nameTextEl.textContent;
    let splitNameText = nameText.split("");

    greetingTextEl.style.opacity='1';
    nameTextEl.style.opacity='1';

    nameTextEl.textContent = '';
    for(let i=0;i<splitNameText.length ;i++){
        nameTextEl.innerHTML += "<span>" + splitNameText[i] +"</span>";
    }

    let count = 0;
    let timer = setInterval(animateLetterByLetter,50);
    function animateLetterByLetter(){
        const span = nameTextEl.querySelectorAll('span')[count];
        span.classList.add('fade');
        count++;
        if (count == splitNameText.length){
            clearInterval(timer);
            timer = null;
            return
        }
    }
}


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


// Intersection observer options 
const appearOptions = {
    threashold:1,
    rootMargin:"0px 0px -100px 0px",
};

// Intersection observer to observe projects such that when they intersect the bottom boundary on the page, 
// the styling of the project are updated
const appearOnScroll = new IntersectionObserver((entries,appearOnScroll)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('project-item-active');
            appearOnScroll.unobserve(entry.target);
        }
    });
},appearOptions);

// telling intersection observer to observe the projects
projectItems.forEach(project=>{
    appearOnScroll.observe(project);
});


// EventListeners
menuBtn.addEventListener('click', toggleNavbar);
[...navLinks].forEach(nav => {
    nav.addEventListener('click', toggleNavbar);
});

animateIntroText();