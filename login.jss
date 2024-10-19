document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.getElementById("phone");
    const otpButton = document.getElementById("otp-button");
    const form = document.getElementById("login-form");

    // Phone number validation: ensure it does not exceed 10 digits
    phoneInput.addEventListener("input", function() {
        const phoneValue = phoneInput.value;

        // If the input exceeds 10 digits, show an alert or handle validation
        if (phoneValue.length > 10) {
            alert("Phone number must be exactly 10 digits.");
            phoneInput.value = phoneValue.slice(0, 10); // Limit the input to 10 digits
        }
    });

    // Optional: Handle form submission validation
    form.addEventListener("submit", function(event) {
        const phoneValue = phoneInput.value;
        
        // Check if the phone number has exactly 10 digits
        if (phoneValue.length < 10) {
            alert("Phone number must be exactly 10 digits.");
            event.preventDefault();  // Prevent form submission
        } else {
            alert("OTP sent to " + phoneValue);
        }
    });

    // Animation or focus effect (optional)
    phoneInput.addEventListener("focus", function() {
        phoneInput.style.borderColor = "#ff6347";
    });

    phoneInput.addEventListener("blur", function() {
        phoneInput.style.borderColor = "#ccc";
    });
});
