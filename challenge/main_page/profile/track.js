document.addEventListener('DOMContentLoaded', () => {
    // Ensure profile.js has run and authenticatedFetch is available
    if (typeof window.authenticatedFetch !== 'function') {
        console.error('Authentication script (profile.js) did not load correctly. Redirecting.');
        // setTimeout(() => window.location.href = '../about/signin.html', 50);
        return; // Stop execution
    }

    const wasteForm = document.getElementById('waste-form');
    const cropInput = document.getElementById('crop');
    const seasonInput = document.getElementById('season');
    const stateInput = document.getElementById('state');
    const areaInput = document.getElementById('area');
    const fertilizerInput = document.getElementById('fertilizer');
    const pesticideInput = document.getElementById('pesticide');
    const predictButton = document.getElementById('predict-waste-button');
    const resultArea = document.getElementById('waste-prediction-result');
    const messageArea = document.getElementById('message-area'); // Shared message area

    if (wasteForm) {
        wasteForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            console.log('Waste form submitted!'); // Added log
            messageArea.textContent = '';
            resultArea.textContent = 'Predicting...';
            predictButton.disabled = true;

            // Collect form data
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
                const response = await window.authenticatedFetch(`${process.env.BASE_URL}/farmx/predict_waste_volume`, {
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
                    // Display the result
                    resultArea.textContent = JSON.stringify(data.result, null, 2);
                     messageArea.textContent = ''; // Clear errors
                } else {
                    console.error('Waste prediction failed:', data);
                    messageArea.textContent = data.message || 'Prediction failed. Please try again.';
                    resultArea.textContent = 'Prediction failed.';
                }

            } catch (error) {
                 console.error('Error during waste prediction submission:', error);
                 if (error.message !== 'Unauthorized') {
                    messageArea.textContent = 'An error occurred during prediction. Please try again.';
                 }
                 resultArea.textContent = 'Error during prediction.';
            } finally {
                predictButton.disabled = false; // Re-enable button
            }
        });
    } else {
        console.error('Waste prediction form not found');
    }
});
