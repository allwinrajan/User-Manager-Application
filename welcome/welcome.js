// Check if the user is logged in by retrieving data from localStorage
const username = localStorage.getItem('username');
if (!username) {
    window.location.href = "../login/login.html";  // If not logged in, redirect to login page
}

// Display the stored username on the welcome page
document.getElementById('usernameDisplay').textContent = username;

// Logout function to clear the localStorage and redirect to login page
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = "../login/login.html";
}
