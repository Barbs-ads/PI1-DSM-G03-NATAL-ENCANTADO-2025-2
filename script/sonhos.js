let slideAtual = 0;
const totalSlides = 3;

function mudarSlide(direcao) {
  slideAtual += direcao;

  if (slideAtual < 0) {
    slideAtual = totalSlides - 1;
  } else if (slideAtual >= totalSlides) {
    slideAtual = 0;
  }

  atualizarCarrossel();
}

function irParaSlide(indice) {
  slideAtual = indice;
  atualizarCarrossel();
}

function atualizarCarrossel() {
  const wrapper = document.getElementById("historiasWrapper");
  wrapper.style.transform = `translateX(-${slideAtual * 100}%)`;

  const indicadores = document.querySelectorAll(".indicador");
  indicadores.forEach((ind, index) => {
    ind.classList.remove("ativo");
    if (index === slideAtual) {
      ind.classList.add("ativo");
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    mudarSlide(-1);
  } else if (e.key === "ArrowRight") {
    mudarSlide(1);
  }
});
