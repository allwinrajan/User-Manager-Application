document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate the credentials
    if (username === storedUsername && password === storedPassword) {
        window.location.href = "../welcome/welcome.html";  // Redirect to welcome page on successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
