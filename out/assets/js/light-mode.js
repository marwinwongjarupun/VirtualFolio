// Check if a light mode preference is stored in local storage
let isLightMode = localStorage.getItem('lightMode') === 'true';

// Function to toggle between light and dark mode
function toggleLightMode() {
  // Toggle the current mode
  isLightMode = !isLightMode;

  // Apply the selected mode
  if (isLightMode) {
    // Switch to light mode
    document.body.classList.add('light-mode');
    // Change the button icon to moon (dark mode)
    document.getElementById('toggle-theme-button').innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    // Switch to dark mode
    document.body.classList.remove('light-mode');
    // Change the button icon to sun (light mode)
    document.getElementById('toggle-theme-button').innerHTML = '<i class="fas fa-sun"></i>';
  }

  // Update the preference in local storage
  localStorage.setItem('lightMode', isLightMode.toString());
}

// Apply light mode if the preference is set
if (isLightMode) {
  document.body.classList.add('light-mode');
}

// Call the function when the button is clicked
document.getElementById('toggle-theme-button').addEventListener('click', toggleLightMode);
