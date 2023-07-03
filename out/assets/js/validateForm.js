function validateForm(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields");
      event.preventDefault(); // Prevents the form submission
      return false;
    }
  
    // Email address validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      event.preventDefault(); // Prevents the form submission
      return false;
    }
  
    // Additional validation logic goes here
  
    return true;
  }