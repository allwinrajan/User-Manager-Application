document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the current users array from localStorage (or initialize it if not present)
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the users array
    users.push({ username: username, password: password });

    // Store the updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful!");

    // Redirect to the login page
    window.location.href = "../login/login.html";
});
