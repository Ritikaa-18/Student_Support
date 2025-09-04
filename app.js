document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple front-end validation
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

        // In a real application, you would send this data to a server
        // using an API call (e.g., fetch()).
        // For this example, we'll just log the data.
        console.log('Username:', username);
        console.log('Password:', password);

        // Here you would add logic for a successful login,
        // such as redirecting the user to another page.
        alert('Login attempt successful! (This is a front-end only example)');
    });
});