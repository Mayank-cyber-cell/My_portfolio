document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const termsCheckbox = document.getElementById('terms');
    const button = document.querySelector('button');

    // Input animations: border color change on focus
    nameInput.addEventListener('focus', function() {
        nameInput.style.borderColor = '#ff6347';
    });

    nameInput.addEventListener('blur', function() {
        nameInput.style.borderColor = '#ddd';
    });

    emailInput.addEventListener('focus', function() {
        emailInput.style.borderColor = '#ff6347';
    });

    emailInput.addEventListener('blur', function() {
        emailInput.style.borderColor = '#ddd';
    });

    // Button enabling/disabling based on terms checkbox
    termsCheckbox.addEventListener('change', function() {
        if (termsCheckbox.checked) {
            button.disabled = false;
            button.style.backgroundColor = '#ff6347';
        } else {
            button.disabled = true;
            button.style.backgroundColor = '#ccc';
        }
    });

    // Form validation with basic alerts
    form.addEventListener('submit', function(event) {
        if (nameInput.value === '' || emailInput.value === '') {
            alert('Please fill out all the required fields.');
            event.preventDefault();  // Prevent form submission if validation fails
        } else if (!termsCheckbox.checked) {
            alert('Please agree to the terms and conditions.');
            event.preventDefault();
        } else {
            alert('Account successfully created!');
        }
    });
});
