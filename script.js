document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform authentication - You need backend logic for this part
    // For now, let's assume a simple hardcoded check
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Redirect to another page or do something else on successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  