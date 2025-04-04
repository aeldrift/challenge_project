document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageArea = document.getElementById('message-area');

    // Check if already logged in (e.g., if navigating back)
    if (localStorage.getItem('authToken')) {
        // Optional: redirect to profile if token exists, or just let profile page handle it
        // window.location.href = '../profile/user.html';
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission
            messageArea.textContent = ''; // Clear previous messages

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (!email || !password) {
                messageArea.textContent = 'Please enter both email and password.';
                return;
            }

            try {
                // Assuming backend runs on localhost:5000 (adjust if different)
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();

                if (response.ok) { // Status 200-299
                    console.log('Login successful:', data);
                    // Store the token
                    localStorage.setItem('authToken', data.token);
                    // Redirect to the user profile page
                    window.location.href = '../profile/user.html';
                } else {
                    // Display error message from backend
                    messageArea.textContent = data.message || 'Login failed. Please check your credentials.';
                    console.error('Login failed:', data);
                }
            } catch (error) {
                messageArea.textContent = 'An error occurred during login. Please try again later.';
                console.error('Login error:', error);
            }
        });
    } else {
        console.error('Login form not found');
    }

    // Removed placeholder social login listeners
});
