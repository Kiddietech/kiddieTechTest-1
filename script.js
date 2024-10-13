const menuHamburger = document.querySelector('.hamburger');
const menuclose = document.querySelector('.close');
const menuNav = document.querySelector('.navbar');

let checker = true;

if (menuHamburger) {
    menuHamburger.addEventListener('click', ()=> {
        menuNav.classList.add('active');
    });
} 

if (menuclose) {
    menuclose.addEventListener('click', ()=> {
        menuNav.classList.remove('active');
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 799) {
        menuclose.style.display = 'none';
    } else {
        menuclose.style.display = 'flex';
    }
});



