const toggleIcon = document.querySelector(".toggle-icon");
toggleIcon.addEventListener("click", () => {
    toggleIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
});
let button = document.querySelector(".projects-button");
let divOcult = document.querySelectorAll(".ocult");
button.addEventListener("click", () => {
    divOcult.forEach((div) => {
        const computedStyle = getComputedStyle(div);
        if (computedStyle.display === "none") {
            div.style.display = "block";
            button.innerHTML = "Mostrar Menos";
        }
        else {
            div.style.display = "none";
            button.innerHTML = "Mostrar Mais";
        }
    });
});
const nav = document.querySelector('nav');
const mediaIcons = document.querySelector(".social-fixed");
function handleScroll() {
    let scrollTop = window.scrollY;
    if (scrollTop > 0) {
        nav.style.background = 'var(--background)';
    }
    else {
        nav.style.background = 'transparent';
    }
    if (scrollTop >= 510) {
        mediaIcons.style.display = "flex";
    }
    else {
        mediaIcons.style.display = "none";
    }
}
window.addEventListener('scroll', handleScroll);
const form = document.querySelector(".form");
const username = document.querySelector(".contact-input-name");
const email = document.querySelector(".contact-input-email");
const textarea = document.querySelector(".contact-input-textarea");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const textareaValue = textarea.value.trim();
    if (usernameValue === "") {
        errorValidation(username, "Preencha esse campo");
    }
    else {
        successValidation(username);
    }
    if (emailValue === "") {
        errorValidation(email, "Preencha esse campo");
    }
    else if (!isEmail(emailValue)) {
        errorValidation(email, 'Email inválido');
    }
    else {
        successValidation(email);
    }
    if (textareaValue === "") {
        errorValidation(textarea, "Preencha esse campo");
    }
    else {
        successValidation(textarea);
    }
    const errorInput = document.querySelectorAll(".error");
    if (errorInput.length === 0) {
        form.submit();
    }
}
function errorValidation(input, message) {
    const formContainer = input.parentElement;
    const small = formContainer.querySelector(".small-error");
    small.innerText = message;
    formContainer.className = "contact-form-container error";
}
function successValidation(input) {
    const formContainer = input.parentElement;
    formContainer.classList.remove("error");
    formContainer.className = "contact-form-container success";
}
function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}
