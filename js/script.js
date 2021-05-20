
const navMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.nav-list');

    navbarToggler.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        navbarToggler.classList.toggle('toggle');
    })
};

navMenu();



    const skillChange = () => {
        let firstChild, lastChild;
        const arrowLeft = document.querySelector('#arrow-left');
        const arrowRight = document.querySelector('#arrow-right');
        const skillAll = document.querySelector('#skill-slider')

        document.addEventListener('click', () => {
            if (event.target === arrowLeft) {
                lastChild = skillAll.lastElementChild;
                skillAll.insertAdjacentElement('afterbegin', lastChild)
            } else if (event.target === arrowRight) {
                firstChild = skillAll.firstElementChild;
                skillAll.insertAdjacentElement('beforeend', firstChild)
            }
        })
    }

skillChange();

ScrollReveal().reveal('.ani-left', {
    origin: 'left',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-right', {
    origin: 'right',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-fade-up', {
    opacity: 0,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-bottom', {
    origin: 'bottom',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-delay', {
    delay: 500
});

ScrollReveal().reveal('.ani-delay-2', {
    delay: 1000
});




