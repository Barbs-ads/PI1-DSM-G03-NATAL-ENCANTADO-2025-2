document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll("#opcoes-cadastro .btn-opcao");
  const formularios = document.querySelectorAll(".form-cadastro");

  document.getElementById("cadastro-site").classList.add("active");
  document.getElementById("cadastro-site").classList.remove("hidden");

  botoes.forEach((botao) => {
    botao.addEventListener("click", function () {
      const formId = this.getAttribute("data-form");
      botoes.forEach((b) => b.classList.remove("active"));
      formularios.forEach((f) => {
        f.classList.remove("active");
        f.classList.add("hidden");
      });

      this.classList.add("active");
      const formAtivo = document.getElementById(formId);
      if (formAtivo) {
        formAtivo.classList.add("active");
        formAtivo.classList.remove("hidden");
      }
    });
  });
});


