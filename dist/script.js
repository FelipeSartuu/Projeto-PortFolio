let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-menu");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});
const toggleIcon = document.querySelector(".toggle-icon");
toggleIcon.addEventListener("click", () => {
    toggleIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
});
let button = document.querySelector(".projects-button");
let divOcult = document.querySelectorAll(".ocult");
button.addEventListener("click", () => {
    divOcult.forEach((div) => {
        const computedStyle = getComputedStyle(div); // Obtém o estilo computado do elemento
        if (computedStyle.display === "none") { // Verifica se o estilo computado é "none"
            div.style.display = "block"; // Define o estilo para "block"
            button.innerHTML = "Mostrar Menos"; // Atualiza o texto do botão para "Mostrar Menos"
        }
        else {
            div.style.display = "none"; // Define o estilo para "none"
            button.innerHTML = "Mostrar Mais"; // Atualiza o texto do botão para "Mostrar Mais"
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
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navlinks.forEach((link) => {
                link.classList.remove("active");
                document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
            });
        }
    });
};
