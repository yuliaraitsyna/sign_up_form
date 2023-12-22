const password = document.getElementById("password");
function validateInput(id) {
    const element = document.getElementById(id);
    const passwordElem = document.getElementById("password");
    const password = passwordElem.value.trim();
    const value = element.value.trim();
    if (value.length === 0) {
        element.classList.remove("valid");
        element.classList.remove("invalid");
    } else {
        switch (id) {
            case "password":
                if (/[A-Z]/.test(value) && value.length >= 8 && /\d/.test(value)) {
                    element.classList.add("valid");
                    element.classList.remove("invalid");
                } else {
                    element.classList.remove("valid");
                    element.classList.add("invalid");
                }
                break;
            case "passwordConfirmation":
                if (password === value && /[A-Z]/.test(value) && value.length >= 8 && /\d/.test(value)) {
                    element.classList.add("valid");
                    element.classList.remove("invalid");
                } else {
                    element.classList.remove("valid");
                    element.classList.add("invalid");
                }
                break;
        }
    }
}
