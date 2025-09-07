// Application Configuration
// Change the app name here and it will update across all pages

const APP_CONFIG = {
    name: "A-Gym💪",
    version: "1.0.0",
    description: "Your Personal Fitness Companion"
};

// Function to update page title and header
function updateAppName() {
    // Update page title
    document.title = document.title.replace(/^[^-]+/, APP_CONFIG.name);
    
    // Update header logo if it exists
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.textContent = APP_CONFIG.name;
    }
    
    // Update any other elements with app name
    const appNameElements = document.querySelectorAll('.app-name');
    appNameElements.forEach(element => {
        element.textContent = APP_CONFIG.name;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', updateAppName);
