// Define the base URL for the API
const API_BASE_URL = 'https://arshsensei.duckdns.org/'; // Added from backend/.env

document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('authToken');
    const userNameSpan = document.getElementById('user-name'); // In user.html
    const logoutButton = document.getElementById('logout-button');
    const messageArea = document.getElementById('message-area'); // Common message area in profile pages

    // --- Authentication Check ---
    if (!token) {
        console.log('No auth token found, redirecting to login.');
        // Redirect to login page if not authenticated
        // Use relative path from profile directory to about directory
        window.location.href = '../about/signin.html';
        return; // Stop further execution
    }

    // --- Fetch User Profile ---
    try {
        // Corrected: Use localhost for the auth profile endpoint
        const response = await fetch(`http://localhost:5000/api/auth/profile`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const userData = await response.json();
            console.log('User profile data:', userData);
            // Display user name if the element exists on the current page
            if (userNameSpan) {
                userNameSpan.textContent = userData.name || 'User';
            }
            // Store user ID if needed by other scripts (e.g., for saving predictions)
            localStorage.setItem('userId', userData._id);
        } else {
            // Handle errors like invalid/expired token
            console.error('Failed to fetch profile:', response.status);
            localStorage.removeItem('authToken'); // Clear invalid token
            localStorage.removeItem('userId');
            window.location.href = '../about/signin.html'; // Redirect to login
            return;
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle network errors, etc.
        if (messageArea) {
             messageArea.textContent = 'Error loading user profile. Please try refreshing.';
        } else {
            alert('Error loading user profile. Please try refreshing.');
        }
        // Optionally redirect to login or show an error state
        // localStorage.removeItem('authToken');
        // window.location.href = '../about/signin.html';
        return;
    }

    // --- Logout Functionality ---
    if (logoutButton) {
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Logging out...');
            localStorage.removeItem('authToken'); // Clear the token
            localStorage.removeItem('userId'); // Clear user ID
            window.location.href = '../about/signin.html'; // Redirect to login page
        });
    } else {
         console.warn('Logout button not found on this page.');
    }

    // --- Analyse.js code moved here ---
    const diseaseForm = document.getElementById('disease-form');
    if (diseaseForm) {
        const imageUpload = document.getElementById('image-upload');
        const imagePreview = document.getElementById('image-preview');
        const analyzeButton = document.getElementById('analyze-button'); // Might not be needed if using form submit
        const resultArea = document.getElementById('prediction-result');
        const messageArea = document.getElementById('message-area'); // Shared with profile.js

        let selectedFile = null;
        let imageBase64 = null;

        if (imageUpload) {
            imageUpload.addEventListener('change', (event) => {
                selectedFile = event.target.files[0];
                imageBase64 = null; // Reset base64 data
                imagePreview.innerHTML = ''; // Clear previous preview
                resultArea.textContent = 'Waiting for analysis...'; // Reset result area
                messageArea.textContent = ''; // Clear messages

                if (selectedFile) {
                    // Basic validation (type and size) - optional
                    if (!selectedFile.type.startsWith('image/')) {
                        messageArea.textContent = 'Please select an image file.';
                        selectedFile = null;
                        return;
                    }
                    // Add size check if needed

                    // Show preview
                    const readerPreview = new FileReader();
                    readerPreview.onload = (e) => {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.style.maxWidth = '200px'; // Limit preview size
                        img.style.maxHeight = '200px';
                        imagePreview.appendChild(img);
                    };
                    readerPreview.readAsDataURL(selectedFile);

                    // Prepare Base64 for submission
                    const readerBase64 = new FileReader();
                    readerBase64.onload = (e) => {
                        // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
                        imageBase64 = e.target.result.split(',')[1];
                        console.log("Image ready for submission (Base64).");
                    };http://localhost:5000/main_page/profile/track.html
                     readerBase64.onerror = (error) => {
                        console.error("Error reading file:", error);
                        messageArea.textContent = 'Error reading image file.';
                        imageBase64 = null;
                    };
                    // No need to read as Base64 anymore for FormData
                    // readerBase64.readAsDataURL(selectedFile);
                }
            });
        }

        diseaseForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            console.log('Disease form submitted!');
            messageArea.textContent = '';
            resultArea.textContent = 'Analyzing...';

            // Check if a file is selected
            if (!selectedFile) {
                messageArea.textContent = 'Please select an image file first.';
                resultArea.textContent = 'Waiting for analysis...';
                return;
            }

            // Use FormData to send the file
            const formData = new FormData();
            formData.append('file', selectedFile); // 'file' must match the FastAPI parameter name

            analyzeButton.disabled = true; // Prevent multiple submissions

            try {
                console.log('Sending image file using FormData to /farmx/predict/');
                // Use authenticatedFetch, but let it handle FormData content type
                const response = await window.authenticatedFetch(`farmx/predict/`, {
                    method: 'POST',
                    // Do NOT set Content-Type header for FormData, browser does it
                    body: formData, // Send FormData directly
                });

                console.log('Raw response from API:', response);

                const data = await response.json();

                if (response.ok) {
                    console.log('Analysis successful:', data);
                    resultArea.textContent = JSON.stringify(data, null, 2);
                    messageArea.textContent = ''; // Clear any previous errors
                } else {
                    console.error('Analysis failed:', data);
                    messageArea.textContent = data.message || 'Analysis failed. Please try again.';
                    resultArea.textContent = 'Analysis failed.';
                }

            } catch (error) {
                // Handle errors from authenticatedFetch (e.g., network, unauthorized)
                // or errors during the fetch process itself
                console.error('Error during analysis submission:', error);
                 if (error.message !== 'Unauthorized') { // Avoid double messages on auth failure
                    messageArea.textContent = 'An error occurred during analysis. Please try again.';
                 }
                resultArea.textContent = 'Error during analysis.';
            } finally {
                 analyzeButton.disabled = false; // Re-enable button
            }
        });
    } else {
        console.error('Disease form not found');
    }

    // --- Utility function for authenticated fetch ---
    // This can be used by analyse.js and track.js
    window.authenticatedFetch = async (url, options = {}) => {
        const currentToken = localStorage.getItem('authToken');
        if (!currentToken) {
            console.error('No token for authenticated fetch. Redirecting.');
            window.location.href = '../about/signin.html';
            throw new Error('Not authenticated'); // Prevent further execution
        }

        const headers = {
            ...options.headers,
            'Authorization': `Bearer ${currentToken}`,
        };

        // Ensure Content-Type is set for POST/PUT requests with a body
        if (options.body && !headers['Content-Type']) {
             if (options.body instanceof FormData) {
                // Let the browser set the Content-Type for FormData
             } else if (typeof options.body === 'string') {
                 headers['Content-Type'] = 'application/json';
             }
        }


        try {
            const response = await fetch(`${API_BASE_URL}${url}`, {
                ...options,
                headers,
            });

            // If unauthorized (e.g., token expired), redirect to login
            if (response.status === 401) {
                console.error('Unauthorized request. Token might be expired. Redirecting.');
                localStorage.removeItem('authToken');
                localStorage.removeItem('userId');
                window.location.href = '../about/signin.html';
                throw new Error('Unauthorized'); // Prevent further execution
            }

            return response; // Return the full response object

        } catch (error) {
            console.error('Authenticated fetch error:', error);
            throw error; // Re-throw the error to be handled by the caller
        }
    };

    // --- Waste Prediction Logic (Moved from track.js) ---
    const wasteForm = document.getElementById('waste-form');
    if (wasteForm) {
        wasteForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            console.log('Waste form submitted!'); // Added log
            const messageArea = document.getElementById('message-area'); // Get message area
            const resultArea = document.getElementById('waste-prediction-result'); // Get result area
            const predictButton = document.getElementById('predict-waste-button');
            messageArea.textContent = '';
            resultArea.textContent = 'Predicting...';
            predictButton.disabled = true;

            // Collect form data
            const cropInput = document.getElementById('crop');
            const seasonInput = document.getElementById('season');
            const stateInput = document.getElementById('state');
            const areaInput = document.getElementById('area');
            const fertilizerInput = document.getElementById('fertilizer');
            const pesticideInput = document.getElementById('pesticide');

            const formData = {
                crop: cropInput.value.trim(),
                season: seasonInput.value.trim(),
                state: stateInput.value.trim(),
                // Ensure numeric values are sent as numbers
                area: parseFloat(areaInput.value),
                fertilizer: parseFloat(fertilizerInput.value),
                pesticide: parseFloat(pesticideInput.value),
            };

            // Basic validation
            if (!formData.crop || !formData.season || !formData.state || isNaN(formData.area) || isNaN(formData.fertilizer) || isNaN(formData.pesticide)) {
                messageArea.textContent = 'Please fill in all fields correctly.';
                resultArea.textContent = 'Waiting for prediction...';
                predictButton.disabled = false;
                return;
            }

            try {
                console.log('Sending waste prediction data:', formData); // Log data
                const response = await window.authenticatedFetch(`farmx/predict_waste_volume`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                console.log('Raw response from API:', response); // Log raw response

                const data = await response.json();

                if (response.ok) {
                    console.log('Waste prediction successful:', data);
                    // Display the result - get element reference just before update
                    const displayElement = document.getElementById('waste-prediction-result');
                    if (displayElement) {
                        // Corrected: Stringify the 'data' object directly, not 'data.result'
                        displayElement.innerText = JSON.stringify(data, null, 2);
                    } else {
                        console.error("Could not find element with ID 'waste-prediction-result' to display results.");
                    }
                    const msgElement = document.getElementById('message-area');
                     if(msgElement) msgElement.textContent = ''; // Clear errors
                } else {
                    console.error('Waste prediction failed:', data);
                    const displayElement = document.getElementById('waste-prediction-result');
                    if (displayElement) displayElement.textContent = 'Prediction failed.';
                    const msgElement = document.getElementById('message-area');
                    if(msgElement) msgElement.textContent = data.message || 'Prediction failed. Please try again.';
                }

            } catch (error) {
                 console.error('Error during waste prediction submission:', error);
                 const displayElement = document.getElementById('waste-prediction-result');
                 if (displayElement) displayElement.textContent = 'Error during prediction.';
                 const msgElement = document.getElementById('message-area');
                 if (msgElement && error.message !== 'Unauthorized') {
                    msgElement.textContent = 'An error occurred during prediction. Please try again.';
                 }
            } finally {
                predictButton.disabled = false; // Re-enable button
            }
        });
    } else {
        console.error('Waste prediction form not found');
    }
});
