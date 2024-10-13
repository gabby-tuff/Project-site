// scripts.js

// Function to change the text when the button is clicked
function changeText() {
    const mainContent = document.querySelector('main p');
    mainContent.textContent = 'You clicked the button!';  // Change text
}

// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');  // Create a new button element
    button.textContent = 'Click Me!';                 // Set button text
    button.onclick = changeText;                      // Set click event handler

    const main = document.querySelector('main');       // Select the main element
    main.appendChild(button);                          // Add the button to the main content
});
