// Function to toggle between light and dark mode

function toggleLightMode() {
    // Check the current mode by inspecting the body's class or style
    const body = document.body;
    const isLightMode = body.classList.contains('light-mode');
  
    // Toggle the current mode
    const newMode = !isLightMode;

    // Apply the selected mode
    if (newMode) {
        // Switch to light mode
        body.classList.add('light-mode');
        // Change the button icon to moon (dark mode)
        document.getElementById('toggle-theme-button').innerHTML = '<i class="fas fa-moon"></i>';
        // Change the logo image to the light version
        document.querySelectorAll('.logo-img').forEach(function(logoImg) {
            logoImg.src = '/assets/img/logo-light.png'; // Replace with the correct image path
        });
    } else {
        // Switch to dark mode
        body.classList.remove('light-mode');
        // Change the button icon to sun (light mode)
        document.getElementById('toggle-theme-button').innerHTML = '<i class="fas fa-sun"></i>';
        // Change the logo image to the dark version
        document.querySelectorAll('.logo-img').forEach(function(logoImg) {
            logoImg.src = '/assets/img/logo.png'; // Replace with the correct image path
        });
    }

    // Update the preference in local storage
    localStorage.setItem('lightMode', newMode.toString());
}

// Check if a light mode preference is stored in local storage
let isLightMode = localStorage.getItem('lightMode') === 'true';

// Apply light mode if the preference is set
if (isLightMode) {
    document.body.classList.add('light-mode');
    // Change the logo image to the light version
    document.querySelectorAll('.logo-img').forEach(function(logoImg) {
        logoImg.src = '/assets/img/logo-light.png'; // Replace with the correct image path
    });
}

// Initialize the button icon based on the initial mode
document.getElementById('toggle-theme-button').innerHTML = isLightMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

// Call the function when the button is clicked
document.getElementById('toggle-theme-button').addEventListener('click', toggleLightMode);
