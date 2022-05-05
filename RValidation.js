// Validation code for inputs
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];
var email = document.forms['form']['email'];

var user_error = document.getElementById('user_error');
var pass_error = document.getElementById('pass_error');
var email_error = document.getElementById('email_error');

username.addEventListener('textInput', user_Verify);
password.addEventListener('textInput', pass_Verify);
email.addEventListener('textInput', email_Verify);

function validated() {
    if (username.value.length < 9) {
        username.style.border = "1px solid red";
        user_error.style.display = "block";
        username.focus();
        return false;
    }
        if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
           if (password.value.length < 6) {
           password.style.border = "1px solid silver";
           pass_error.style.display = "block";
           password.focus();
           return false;
    }
}
function user_Verify() {
    if (username.value.length >= 8) {
        username.style.border = "1px solid red";
        user_error.style.display = "none";
        return true;
    }
    function email_Verify() {
        if (email.value.length >= 8) {
            email.style.border = "1px solid red";
            email_error.style.display = "none";
            return true;
        }
        function pass_Verify() {
            if (password.value.length >= 5) {
                password.style.border = "1px solid red";
                pass_error.style.display = "none";
                return true;
            }
        }
    }
}