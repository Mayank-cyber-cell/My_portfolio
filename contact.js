// JS for simple animations and form validations

// Add event listener for Contact Form submission
document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! Your message has been sent.');
});

// Animate header on page load
window.addEventListener('load', function() {
    const header = document.querySelector('.header');
    header.style.opacity = 0;
    header.style.transition = 'opacity 1s ease-in-out';

    setTimeout(function() {
        header.style.opacity = 1;
    }, 100);
});

// Add hover animation to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.2s';
    });

    button.addEventListener('mouseout', function() {
        button.style.transform = 'scale(1)';
    });
});
