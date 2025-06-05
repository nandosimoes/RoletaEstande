let roleta = new Winwheel({
  canvasId: 'canvas',
  numSegments: 20,
  outerRadius: 340,
  textFontSize: 18,
  textAlignment: 'center',
  segments: [
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    { fillStyle: '#fcfdfc', text: 'Chaveiro surpresa' },
    { fillStyle: '#496646', text: 'Livro' },
    { fillStyle: '#cbd1ca', text: 'Marca Páginas' },
    { fillStyle: '#73a56f', text: 'Bombom' },
    { fillStyle: '#9daf9e', text: 'Nada' },
    
  ],
  animation: {
    type: 'spinToStop',
    duration: 5,
    spins: 6,
    callbackFinished: mostrarResultado,
    callbackSound: tocarSom
  }
});

let som = new Audio('https://www.soundjay.com/button/beep-07.wav');

function tocarSom() {
  som.pause();
  som.currentTime = 0;
  som.play();
}

function girar() {
  roleta.stopAnimation(false);
  roleta.rotationAngle = 0;
  roleta.startAnimation();
}

function mostrarResultado() {
  const seg = roleta.getIndicatedSegment();
  const texto = seg.text || (seg.textLines ? seg.textLines.join(' ') : 'Sem texto');

  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  popupText.textContent = `Resultado: ${texto}`;
  popup.classList.remove("hidden");

  const li = document.createElement("li");
  li.textContent = texto;
  const lista = document.getElementById("historico-premios");
  lista.prepend(li);
  if (lista.children.length > 10) {
    lista.removeChild(lista.lastChild);
  }
}

function fecharPopup() {
  document.getElementById("popup").classList.add("hidden");
}
