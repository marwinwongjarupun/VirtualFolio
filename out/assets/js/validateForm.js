function validateForm() {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  // Regular expression to check the email format
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false; // Prevent form submission
  }

  // Form validation succeeded, allow form submission
  return true;
}