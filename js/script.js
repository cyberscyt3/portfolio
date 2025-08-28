const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function ajustarFonte() {
  const largura = window.innerWidth;
  const titulo = document.querySelector('h1');

  if (largura < 600) {
    titulo.style.fontSize = "40px";
  } else {
    titulo.style.fontSize = "75px";
  }
}

window.addEventListener("resize", ajustarFonte);
window.addEventListener("load", ajustarFonte);
