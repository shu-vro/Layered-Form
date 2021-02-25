const sign_up_btn = document.querySelector(".sign_up_btn");
const sign_in_btn = document.querySelector(".sign_in_btn");
const container = document.querySelector(".container");
const emails = document.querySelectorAll("input[type='email']");
const eyes = document.querySelectorAll(".fa-eye");
const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

sign_in_btn.addEventListener("click", () => {
    container.classList.add("sign_in_active");
    container.classList.remove("sign_up_active");
});

sign_up_btn.addEventListener("click", () => {
    container.classList.remove("sign_in_active");
    container.classList.add("sign_up_active");
});

eyes.forEach((eye) => {
    eye.addEventListener("click", () => {
        let inputBx = eye.parentNode;
        let password = inputBx.querySelector("input");
        if (password.type == "password") {
            password.type = "text";
            eye.classList.add("fa-eye-slash");
        } else {
            password.type = "password";
            eye.classList.remove("fa-eye-slash");
        }
    });
});

emails.forEach((email) => {
    let inputBx = email.parentNode;
    email.addEventListener("input", () => {
        let emailValue = email.value;
        if (emailValue.match(pattern)) {
            inputBx.classList.add("valid");
            inputBx.classList.remove("invalid");
        } else {
            inputBx.classList.remove("valid");
            inputBx.classList.add("invalid");
        }
    });
});
