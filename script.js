document.getElementById("save").addEventListener("click", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let firstName = document.getElementById("firstName").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let programmingLangs = document.querySelectorAll("input[name='lang']:checked");

    let errorMessages = [];

    // Username validation
    if (username === "") {
        errorMessages.push("Username is required.");
    }

    // First name validation
    if (firstName === "") {
        document.querySelector(".error").style.display = "inline";
        errorMessages.push("First name is required.");
    } else {
        document.querySelector(".error").style.display = "none";
    }

    // Password validation
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
        errorMessages.push("Password must have at least 6 characters, one uppercase, one lowercase, one digit, and one special character.");
    }

    // Email validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        errorMessages.push("Enter a valid email address.");
    }

    // Date of Birth validation
    if (dob === "") {
        errorMessages.push("Date of Birth is required.");
    }

    // Programming Language validation
    if (programmingLangs.length === 0) {
        errorMessages.push("Select at least one programming language.");
    }

    // Display errors
    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
    } else {
        alert("Form submitted successfully!");
    }
});
