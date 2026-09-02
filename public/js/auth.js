console.log("DocuVault authentication JavaScript loaded!");
const form = document.querySelector("form");
console.log(form);

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if(password.value !== confirmPassword.value)
    {
        passwordError.textContent = "Passwords do not match!";
        console.log("Passwords do not match!");
    }
    else
    {
        passwordError.textContent = "";
        console.log("Passwords match!");
    }

    console.log("Form was submitted!");

});