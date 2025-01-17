// Function to render stored users in a table
function renderUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = ''; // Clear the existing table content

    // Loop through users and add rows to the table
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;

        const passwordCell = document.createElement('td');
        passwordCell.textContent = user.password; // Display password

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            deleteUser(index);  // Delete the user when the button is clicked
        };
        
        deleteCell.appendChild(deleteButton);
        row.appendChild(usernameCell);
        row.appendChild(passwordCell);  // Add the password column
        row.appendChild(deleteCell);
        tableBody.appendChild(row);
    });
}

// Function to delete a user by index
function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);  // Remove the user at the specified index
    localStorage.setItem('users', JSON.stringify(users));  // Update localStorage with the new array

    renderUsers();  // Re-render the table after deletion
}

// Function to go back to the homepage
function goBack() {
    window.location.href = "../index.html";  // Go back to the homepage
}

// Render the users on page load
window.onload = renderUsers;
