// script.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the form from submitting

  // Get the values from the input fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Clear any previous error message
  errorMessage.textContent = "";

  // Simple validation
  if (username === "" || password === "") {
      errorMessage.textContent = "Both fields are required!";
  } else {
      // If valid, you can do something with the form data (like sending it to a server)
      alert("Login successful!");
  }
});
