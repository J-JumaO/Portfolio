// JavaScript file for portfolio website

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', function() {
    let headerNavLinks = document.querySelectorAll('nav a');
    let fromTop = window.scrollY;

    headerNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop + 100 &&
            section.offsetTop + section.offsetHeight > fromTop + 100
        ) {
            link.classList.add('text-blue-500', 'font-bold');
        } else {
            link.classList.remove('text-blue-500', 'font-bold');
        }
    });
});
