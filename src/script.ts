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


const nav = document.querySelector('nav');

const handleScroll = () => {
  let scrollTop = window.scrollY
  if (scrollTop > 0) {
    nav.style.background = 'var(--background)';
  } else {
    nav.style.background = 'transparent';
  }
};

window.addEventListener('scroll', handleScroll);

