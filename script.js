// Easter eggs do portfólio original, preservados e acessíveis por teclado.
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === 'm') {
    event.preventDefault();
    document.body.classList.toggle('light-mode');
    console.log('Você encontrou o tema alternativo. Curioso!!');
  }
});

const headerNome = document.querySelector('.name-easter-egg');
if (headerNome) {
  headerNome.addEventListener('click', function () {
    const alternateName = headerNome.textContent.trim() === 'Guilherme Canina';
    headerNome.textContent = alternateName ? 'Гуилхерме' : 'Guilherme Canina';
    headerNome.setAttribute('aria-pressed', String(alternateName));
    headerNome.setAttribute('aria-label', alternateName ? 'Restaurar o nome original' : 'Revelar easter egg do nome');
  });
}

const lainGif = document.createElement('img');
lainGif.id = 'lain-gif';
lainGif.alt = '';
lainGif.setAttribute('aria-hidden', 'true');
lainGif.hidden = true;
lainGif.decoding = 'async';
document.body.appendChild(lainGif);

const lainToggle = document.getElementById('lain-toggle');
if (lainToggle) {
  lainToggle.addEventListener('click', function () {
    const showLain = lainGif.hidden;
    // Carrega o GIF original só quando o easter egg é acionado.
    if (showLain && !lainGif.hasAttribute('src')) lainGif.src = 'img/lain.gif';
    lainGif.hidden = !showLain;
    lainToggle.setAttribute('aria-expanded', String(showLain));
  });
}

// Navegação interna suave. O comportamento nativo permanece se não houver destino válido.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener('blur', function removeTabindex() {
        target.removeAttribute('tabindex');
        target.removeEventListener('blur', removeTabindex);
      }, { once: true });
    }
  });
});

const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();

console.log('O que você está fazendo aqui?');
