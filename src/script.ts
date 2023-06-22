//Menu

let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".nav-menu")

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
})






//Light and Dark Mode
const toggleIcon = document.querySelector(".toggle-icon") as HTMLElement

toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("bx-sun")
  document.body.classList.toggle("dark-mode")
})



let button = document.querySelector(".projects-button") as HTMLButtonElement;
let divOcult = document.querySelectorAll(".ocult") as NodeListOf<HTMLElement>

button.addEventListener("click", () => {
  divOcult.forEach((div: HTMLDivElement): void => {

    const computedStyle = getComputedStyle(div); // Obtém o estilo computado do elemento

    if (computedStyle.display === "none") { // Verifica se o estilo computado é "none"
      div.style.display = "block"; // Define o estilo para "block"
      button.innerHTML = "Mostrar Menos"; // Atualiza o texto do botão para "Mostrar Menos"

    } else {
      div.style.display = "none"; // Define o estilo para "none"
      button.innerHTML = "Mostrar Mais"; // Atualiza o texto do botão para "Mostrar Mais"
    }
  });
});




//Nav bar transparent and github + linkedin
const nav = document.querySelector('nav') as HTMLElement;
const mediaIcons = document.querySelector(".social-fixed") as HTMLElement;

function handleScroll(): void {
  let scrollTop: number = window.scrollY;
  if (scrollTop > 0) {
    nav.style.background = 'var(--background)';
  } else {
    nav.style.background = 'transparent';
  }

  if (scrollTop >= 510) {
    mediaIcons.style.display = "flex";
  } else {
    mediaIcons.style.display = "none";
  }
}

window.addEventListener('scroll', handleScroll);





// VALIDATION FORMS

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".contact-input-name") as HTMLInputElement;
const email = document.querySelector(".contact-input-email") as HTMLInputElement;
const textarea = document.querySelector(".contact-input-textarea") as HTMLInputElement;

form.addEventListener("submit", checkInputs);

function checkInputs(event: Event) {
  const usernameValue: string = username.value.trim();
  const emailValue: string = email.value.trim();
  const textareaValue: string = textarea.value.trim();

  let isValid = true;

  if (usernameValue === "") {
    errorValidation(username, "Preencha esse campo");
    isValid = false;
  } else {
    successValidation(username);
  }

  if (emailValue === "") {
    errorValidation(email, "Preencha esse campo");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    errorValidation(email, 'Email inválido');
    isValid = false;
  } else {
    successValidation(email);
  }

  if (textareaValue === "") {
    errorValidation(textarea, "Preencha esse campo");
    isValid = false;
  } else {
    successValidation(textarea);
  }

  if (!isValid) {
    event.preventDefault();
  }
}

function errorValidation(input: HTMLInputElement, message: string) {
  const formContainer: HTMLElement = input.parentElement as HTMLElement;
  const small: HTMLElement = formContainer.querySelector(".small-error") as HTMLElement;

  small.innerText = message;
  formContainer.className = "contact-form-container error";
}

function successValidation(input: HTMLInputElement) {
  const formContainer = input.parentElement as HTMLElement;
  formContainer.classList.remove("error");
  formContainer.className = "contact-form-container success";
}

function isEmail(email: string): boolean {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b-\x0c\x0e-\x7f])+)\])/.test(email);
}















let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec: HTMLElement) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link: HTMLElement) => {
        link.classList.remove("active");
        document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
      });
    }
  });
};
