// SustainAds AI - Frontend Application
const API_BASE_URL = 'http://localhost:3000';

// DOM Elements
const videoForm = document.getElementById('videoForm');
const loadingSection = document.getElementById('loadingSection');
const resultSection = document.getElementById('resultSection');
const videoPlayer = document.getElementById('videoPlayer');
const downloadLink = document.getElementById('downloadLink');

// Form Submit Handler
videoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        businessName: document.getElementById('businessName').value,
        businessType: document.getElementById('businessType').value,
        description: document.getElementById('description').value,
        keywords: document.getElementById('keywords').value.split(',').map(k => k.trim())
    };

    // Show loading state
    showLoading();

    try {
        // Call API to generate video
        const response = await fetch(`${API_BASE_URL}/api/generate-video`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to generate video');
        }

        const result = await response.json();
        
        // Display the result
        displayVideo(result);
    } catch (error) {
        console.error('Error generating video:', error);
        alert('Failed to generate video. Please try again.');
        hideLoading();
    }
});

// Show loading state
function showLoading() {
    loadingSection.style.display = 'block';
    resultSection.style.display = 'none';
    videoForm.style.display = 'none';
}

// Hide loading state
function hideLoading() {
    loadingSection.style.display = 'none';
    videoForm.style.display = 'block';
}

// Display generated video
function displayVideo(result) {
    hideLoading();
    
    // Show result section
    resultSection.style.display = 'block';
    
    // Display video
    if (result.videoUrl) {
        videoPlayer.innerHTML = `
            <video controls autoplay>
                <source src="${result.videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    }
    
    // Display download link
    if (result.downloadUrl) {
        downloadLink.innerHTML = `
            <a href="${result.downloadUrl}" download>Download Video Ad</a>
        `;
    }
    
    // Scroll to result
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Reset form for new video
function resetForm() {
    videoForm.reset();
    resultSection.style.display = 'none';
    videoForm.style.display = 'block';
}

// Add reset button listener if it exists
const resetButton = document.getElementById('resetButton');
if (resetButton) {
    resetButton.addEventListener('click', resetForm);
}
