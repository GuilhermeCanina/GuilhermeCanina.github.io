// Pequenos easter eggs do portfólio original, mantidos de propósito.
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === 'm') {
    event.preventDefault();
    document.body.classList.toggle('light-mode');
    console.log('Você encontrou o tema alternativo. Curioso!!');
  }
});

const headerNome = document.querySelector('header h1');
if (headerNome) {
  headerNome.addEventListener('click', function () {
    headerNome.textContent = headerNome.textContent === 'Guilherme Canina'
      ? 'Гуилхерме'
      : 'Guilherme Canina';
  });
}

const footer = document.querySelector('footer');
const lainGif = document.createElement('img');
lainGif.src = 'img/lain.gif';
lainGif.id = 'lain-gif';
lainGif.alt = 'Lain em uma animação com efeito de interferência';
lainGif.setAttribute('aria-hidden', 'true');
document.body.appendChild(lainGif);

if (footer) {
  footer.addEventListener('click', function () {
    const isVisible = lainGif.style.display === 'block';
    lainGif.style.display = isVisible ? 'none' : 'block';
  });
}

// Faz os links internos rolarem suavemente sem bloquear a navegação por teclado.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();

console.log('O que você está fazendo aqui?');
