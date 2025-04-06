document.addEventListener('DOMContentLoaded', () => {
    // Ensure profile.js has run and authenticatedFetch is available
    if (typeof window.authenticatedFetch !== 'function') {
        console.error('Authentication script (profile.js) did not load correctly. Redirecting.');
        // Maybe add a small delay before redirecting
        // setTimeout(() => window.location.href = '../about/signin.html', 50);
        return; // Stop execution if auth check failed or hasn't run
    }

    const diseaseForm = document.getElementById('disease-form');
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
                };
                 readerBase64.onerror = (error) => {
                    console.error("Error reading file:", error);
                    messageArea.textContent = 'Error reading image file.';
                    imageBase64 = null;
                };
                readerBase64.readAsDataURL(selectedFile); // Read again for base64
            }
        });
    }

    if (diseaseForm) {
        diseaseForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            console.log('Disease form submitted!'); // Added log
            messageArea.textContent = '';
            resultArea.textContent = 'Analyzing...';

            if (!selectedFile || !imageBase64) {
                messageArea.textContent = 'Please select an image file first.';
                resultArea.textContent = 'Waiting for analysis...';
                return;
            }

            analyzeButton.disabled = true; // Prevent multiple submissions

            try {
                console.log('Sending image data to /api/predictions/disease', { imageData: imageBase64 }); // Log data
                const response = await window.authenticatedFetch(`${process.env.BASE_URL}/farmx/predict/`, {
                    method: 'POST',
                    headers: {
                         // Content-Type will be set automatically by authenticatedFetch
                         // if body is stringified JSON
                         'Content-Type': 'application/json',
                    },
                    // Send as JSON object with 'imageData' key matching backend controller
                    body: JSON.stringify({ imageData: imageBase64 }),
                });

                console.log('Raw response from API:', response); // Log raw response

                const data = await response.json();

                // Log the exact structure received
                console.log('Exact data received from API:', JSON.stringify(data, null, 2));

                if (response.ok) {
                    messageArea.textContent = ''; // Clear errors early

                    // --- Format the result for better display (Simplified Test) ---
                    try {
                        if (data && data.disease && data.info) {
                            const disease = data.disease;
                            const info = data.info;

                            // Simple HTML: Heading for disease, <pre> for info
                            // const simpleHtmlOutput = `<h3>${disease}</h3><pre>${info}</pre>`; // Keep simplified logic commented for now

                            // **** Diagnostic Step: Check if resultArea exists and try setting textContent ****
                            if (resultArea) {
                                console.log("resultArea element found. Attempting to set textContent...");
                                resultArea.textContent = `Disease Found: ${disease}`; // Test basic text setting
                                console.log("Successfully set textContent for resultArea.");

                                // Now try innerHTML again, maybe after a tiny delay? (Less likely to help, but trying)
                                // setTimeout(() => {
                                //     console.log("Attempting innerHTML again...");
                                //     resultArea.innerHTML = `<h3>${disease}</h3><pre>${info}</pre>`;
                                //     console.log("innerHTML attempt finished.");
                                // }, 10);

                            } else {
                                console.error("!!! resultArea element NOT FOUND !!!");
                            }
                            // **** End Diagnostic Step ****

                        } else {
                            // Data structure is not as expected
                            console.error("API response structure unexpected:", data);
                            resultArea.textContent = `Unexpected data format: ${JSON.stringify(data, null, 2)}`;
                        }
                    } catch (displayError) {
                         // Catch errors during the simplified display attempt
                        console.error("Error setting simplified HTML output:", displayError);
                        resultArea.textContent = `Error displaying result: ${displayError.message}. Raw data: ${JSON.stringify(data, null, 2)}`;
                    }
                    // --- End formatting ---

                } else {
                    console.error('Analysis failed (non-OK response):', data);
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
});
