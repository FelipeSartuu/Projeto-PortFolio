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








const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".contact-input-name") as HTMLInputElement;
const email = document.querySelector(".contact-input-email") as HTMLInputElement;
const textarea = document.querySelector(".contact-input-textarea") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue: string = username.value.trim();
  const emailValue: string = email.value.trim();
  const textareaValue: string = textarea.value.trim();

  if (usernameValue === "") {
    errorValidation(username, "Preencha esse campo");
  } else {
    successValidation(username);
  }

  if (emailValue === "") {
    errorValidation(email, "Preencha esse campo");
  } else if (!isEmail(emailValue)) {
    errorValidation(email, 'Email inválido') 
  }
  else {
    successValidation(email);
  }

  if (textareaValue === "") {
    errorValidation(textarea, "Preencha esse campo");
  } else {
    successValidation(textarea);
  }

}

function errorValidation(input: HTMLInputElement, message: string) {
  const formContainer: HTMLElement = input.parentElement as HTMLElement;
  const small: HTMLElement = formContainer.querySelector(".small-error");

  small.innerText = message;
  formContainer.className = "contact-form-container error"
}

function successValidation(input: HTMLInputElement) {
  const formContainer = input.parentElement as HTMLElement;
  formContainer.classList.remove("error")
  formContainer.className = "contact-form-container success"
}

function isEmail(email: string): boolean {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}