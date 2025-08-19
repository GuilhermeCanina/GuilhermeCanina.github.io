document.addEventListener("keydown", function(event) {
    if (event.key === "m" && event.ctrlKey) {
        document.body.classList.toggle("dark-mode");
        console.log("Você descobriu o modo escuro, curioso!!");
    }
});

const headerNome = document.querySelector("header h1");

headerNome.addEventListener("click", function() {
  if (headerNome.textContent === "Guilherme Canina") {
    headerNome.textContent = "Гуилхерме";
  } else {
    headerNome.textContent = "Guilherme Canina";
  }
});

console.log("O que você está fazendo aqui?");


const footer = document.querySelector("footer");
let lainVisible = false;

const lainGif = document.createElement("img");
lainGif.src = "img/lain.gif";
lainGif.id = "lain-gif";
document.body.appendChild(lainGif);


footer.addEventListener("click", function() {
    lainVisible = !lainVisible;
    lainGif.style.display = lainVisible ? "block" : "none";
});

document.querySelectorAll('.btn-scroll').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(btn.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const introSection = document.querySelector('.intro-section');

window.addEventListener('scroll', function() {
  if (window.scrollY > this.window.innerHeight / 1.1) {
    introSection.classList.add('hide-gif');
  } else {
    introSection.classList.remove('hide-gif');
  }
});