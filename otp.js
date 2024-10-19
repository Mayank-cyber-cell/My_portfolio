document.addEventListener('DOMContentLoaded', () => {
    let timerElement = document.getElementById('timer');
    let resendButton = document.getElementById('resend');
    let countdown = 30;
    let countdownInterval;

    // Function to start or restart the timer
    function startTimer() {
        countdown = 30;
        timerElement.textContent = `(${countdown}s remaining)`;
        
        clearInterval(countdownInterval); // Clear any previous timer
        countdownInterval = setInterval(() => {
            countdown--;
            timerElement.textContent = `(${countdown}s remaining)`;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                timerElement.textContent = "OTP expired. Please resend.";
            }
        }, 1000);
    }

    // Initially start the timer
    startTimer();

    // Restart timer when clicking on "Resend Now"
    resendButton.addEventListener('click', () => {
        startTimer(); // Restart timer
    });

    // Automatically move to the next input box
    const otpInputs = document.querySelectorAll('.otp-box');

    otpInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            // If input is filled, move to the next input
            if (input.value.length === 1) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            }
        });

        // Move to the previous input box if Backspace is pressed
        input.addEventListener('keydown', (event) => {
            if (event.key === "Backspace" && input.value.length === 0 && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
});
