// Smooth scrolling for navbar links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});


// Navbar shadow on scroll

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";

    } 
    
    else {

        header.style.boxShadow = "none";

    }

});


// Button click animation

const button = document.querySelector('.btn');

button.addEventListener('click', () => {

    button.innerHTML = "Opening Contact...";

    setTimeout(() => {

        button.innerHTML = "Hire Me";

    }, 2000);

});