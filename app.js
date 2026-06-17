/* ============================================================
   APP.JS — Funções auxiliares e validação (Etapa 4)
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Ano atual no rodapé ---------- */
  function atualizarAno() {
    var elementoAno = document.getElementById("ano");
    if (elementoAno) {
      elementoAno.textContent = new Date().getFullYear();
    }
  }

  /* ---------- Menu mobile (abrir/fechar) ---------- */
  function configurarMenu() {
    var botao = document.getElementById("navToggle");
    var menu = document.getElementById("menu");
    if (!botao || !menu) return;

    botao.addEventListener("click", function () {
      var aberto = menu.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    // Fecha o menu ao clicar em um link (em telas pequenas)
    menu.addEventListener("click", function (evento) {
      if (evento.target.matches(".nav__link")) {
        menu.classList.remove("aberto");
        botao.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Funções auxiliares de validação ---------- */
  function emailValido(valor) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  function mostrarErro(campo, mensagem) {
    var grupo = campo.closest(".form__campo");
    if (!grupo) return;
    var erro = grupo.querySelector(".form__erro");
    campo.classList.add("invalido");
    campo.setAttribute("aria-invalid", "true");
    if (erro) erro.textContent = mensagem;
  }

  function limparErro(campo) {
    var grupo = campo.closest(".form__campo");
    if (!grupo) return;
    var erro = grupo.querySelector(".form__erro");
    campo.classList.remove("invalido");
    campo.removeAttribute("aria-invalid");
    if (erro) erro.textContent = "";
  }

  /* ---------- Validação do formulário de contato ---------- */
  function configurarFormulario() {
    var form = document.getElementById("formContato");
    if (!form) return;

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var assunto = document.getElementById("assunto");
    var mensagem = document.getElementById("mensagem");
    var feedback = document.getElementById("formFeedback");

    // Limpa o erro enquanto o usuário digita
    [nome, email, assunto, mensagem].forEach(function (campo) {
      if (campo) {
        campo.addEventListener("input", function () {
          limparErro(campo);
        });
      }
    });

    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      var valido = true;

      if (feedback) {
        feedback.classList.remove("sucesso");
        feedback.textContent = "";
      }

      // Nome: mínimo 3 caracteres
      if (!nome.value.trim() || nome.value.trim().length < 3) {
        mostrarErro(nome, "Informe seu nome (mínimo 3 caracteres).");
        valido = false;
      }

      // E-mail válido
      if (!emailValido(email.value.trim())) {
        mostrarErro(email, "Informe um e-mail válido.");
        valido = false;
      }

      // Assunto obrigatório
      if (!assunto.value.trim()) {
        mostrarErro(assunto, "Informe o assunto da mensagem.");
        valido = false;
      }

      // Mensagem: mínimo 10 caracteres
      if (!mensagem.value.trim() || mensagem.value.trim().length < 10) {
        mostrarErro(mensagem, "A mensagem deve ter ao menos 10 caracteres.");
        valido = false;
      }

      if (valido) {
        form.reset();
        if (feedback) {
          feedback.classList.add("sucesso");
          feedback.textContent =
            "Mensagem enviada com sucesso! Em breve entrarei em contato.";
        }
      } else {
        // Foca no primeiro campo inválido
        var primeiroInvalido = form.querySelector(".invalido");
        if (primeiroInvalido) primeiroInvalido.focus();
      }
    });
  }

  /* ---------- Inicialização ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    atualizarAno();
    configurarMenu();
    configurarFormulario();
  });
})();
