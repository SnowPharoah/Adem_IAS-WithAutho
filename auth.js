// auth.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the input matches stored credentials (replace with your actual stored credentials)
    var storedUsername = "SampleUser@gmail.com";
    var storedPassword = "Example!Only1219?";

    if (username === storedUsername && password === storedPassword) {
        // If credentials match, redirect to index.html
        window.location.href = 'index.html';
    } else {
        // If credentials don't match, display an error message (you can customize this part)
        alert('Invalid username or password. Please try again.');
    }
}
