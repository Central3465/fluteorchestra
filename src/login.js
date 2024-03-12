document.getElementById("submit").addEventListener("click", handleFormSubmit);

function handleFormSubmit() {
  event.preventDefault(); // Prevent the page from refreshing

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (validateInput(username, password)) {
    // Replace this with your own authentication logic
    alert(`You have successfully been logged in. \n Click OK to continue.`);
  }
}

function validateInput(username, password) {
  if (username.length < 3 || password.length < 3) {
    alert("Please enter a username and password with at least 3 characters.");
    return false;
  }
  if (!(username === "test101" && password === "test")) {
    alert("Invalid Credentials. \n Please try again.");
    return false;
  } else {
    location.replace("dashboard.html");
    return true;
  }
}
