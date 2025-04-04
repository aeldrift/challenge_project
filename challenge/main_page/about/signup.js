document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageArea = document.getElementById('message-area');

    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission
            messageArea.textContent = ''; // Clear previous messages

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (!name || !email || !password) {
                messageArea.textContent = 'Please fill in all fields.';
                return;
            }

            // Basic password validation (optional)
            if (password.length < 6) {
                 messageArea.textContent = 'Password must be at least 6 characters long.';
                 return;
            }

            try {
                // Assuming backend runs on localhost:5000 (adjust if different)
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                const data = await response.json();

                if (response.status === 201) { // Successfully created
                    console.log('Registration successful:', data);
                    // Optionally store token and redirect, or just redirect to login
                    // localStorage.setItem('authToken', data.token);
                    // window.location.href = '../profile/user.html';

                    // Redirect to sign-in page after successful registration
                    messageArea.style.color = 'green';
                    messageArea.textContent = 'Registration successful! Redirecting to login...';
                    setTimeout(() => {
                        window.location.href = 'signin.html';
                    }, 2000); // Wait 2 seconds before redirecting

                } else {
                    // Display error message from backend
                    messageArea.style.color = 'red';
                    messageArea.textContent = data.message || 'Registration failed. Please try again.';
                    console.error('Registration failed:', data);
                }
            } catch (error) {
                messageArea.style.color = 'red';
                messageArea.textContent = 'An error occurred during registration. Please try again later.';
                console.error('Registration error:', error);
            }
        });
    } else {
        console.error('Signup form not found');
    }

    // Removed placeholder social signup listeners
});
