/* ============================================================
   app.js — Lógica principal do site
   Projeto: Blog Pessoal | GitHub Pages
   ============================================================ */

'use strict';

// ── 1. UTILITÁRIOS ────────────────────────────────────────────
/**
 * Seleciona um elemento do DOM
 * @param {string} seletor - Seletor CSS
 * @returns {Element|null}
 */
function sel(seletor) {
  return document.querySelector(seletor);
}

/**
 * Seleciona múltiplos elementos do DOM
 * @param {string} seletor - Seletor CSS
 * @returns {NodeList}
 */
function selTodos(seletor) {
  return document.querySelectorAll(seletor);
}

// ── 2. NAVEGAÇÃO ──────────────────────────────────────────────

/**
 * Inicializa a navegação:
 * - Destaca o link ativo com base na URL
 * - Menu hamburger no mobile
 */
function iniciarNav() {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  const links = selTodos('.nav-links a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === paginaAtual || (paginaAtual === '' && href === 'index.html')) {
      link.classList.add('ativo');
    }
  });

  // Hamburger mobile
  const toggle = sel('.nav-toggle');
  const navLinks = sel('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('aberto');

      // Acessibilidade
      const expandido = navLinks.classList.contains('aberto');
      toggle.setAttribute('aria-expanded', expandido);
    });

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('aberto'));
    });
  }

  // Sombra no header ao rolar
  const header = sel('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 20
        ? '0 4px 30px rgba(0, 245, 212, 0.1)'
        : 'none';
    });
  }
}

// ── 3. ANIMAÇÕES AO ROLAR (Intersection Observer) ─────────────

/**
 * Anima elementos com classe .revelar quando entram na tela
 */
function iniciarAnimacoesReveal() {
  const elementos = selTodos('.revelar');

  if (elementos.length === 0) return;

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada, i) => {
        if (entrada.isIntersecting) {
          // Atraso progressivo para grupos de elementos
          setTimeout(() => {
            entrada.target.classList.add('visivel');
          }, i * 80);

          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  elementos.forEach(el => observador.observe(el));
}

// ── 4. BARRAS DE HABILIDADES ──────────────────────────────────

/**
 * Anima as barras de progresso de habilidades
 * quando a seção entra na tela
 */
function iniciarBarrasHabilidade() {
  const barras = selTodos('.hab-progresso');

  if (barras.length === 0) return;

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          const barra = entrada.target;
          const valor = barra.dataset.progresso || '0';
          barra.style.width = valor + '%';
          observador.unobserve(barra);
        }
      });
    },
    { threshold: 0.5 }
  );

  barras.forEach(barra => observador.observe(barra));
}

// ── 5. VALIDAÇÃO DE FORMULÁRIO ────────────────────────────────

/**
 * Valida um campo individual
 * @param {HTMLElement} campo - Input ou textarea
 * @returns {boolean}
 */
function validarCampo(campo) {
  const grupo = campo.closest('.form-grupo');
  const msgErro = grupo?.querySelector('.erro-msg');

  // Remove estado de erro
  grupo?.classList.remove('erro');

  const valor = campo.value.trim();
  const tipo = campo.type;
  const obrigatorio = campo.required;

  // Campo vazio
  if (obrigatorio && !valor) {
    if (msgErro) msgErro.textContent = 'Este campo é obrigatório.';
    grupo?.classList.add('erro');
    return false;
  }

  // Validação de e-mail
  if (tipo === 'email' && valor) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(valor)) {
      if (msgErro) msgErro.textContent = 'Informe um e-mail válido.';
      grupo?.classList.add('erro');
      return false;
    }
  }

  // Validação de comprimento mínimo (definido via data-min)
  const minLength = campo.dataset.min ? parseInt(campo.dataset.min) : null;
  if (minLength && valor.length < minLength) {
    if (msgErro) msgErro.textContent = `Mínimo de ${minLength} caracteres.`;
    grupo?.classList.add('erro');
    return false;
  }

  return true;
}

/**
 * Inicializa validação em tempo real e ao enviar
 */
function iniciarFormularioContato() {
  const form = sel('#form-contato');
  if (!form) return;

  const campos = form.querySelectorAll('input[required], textarea[required]');

  // Validação ao perder foco
  campos.forEach(campo => {
    campo.addEventListener('blur', () => validarCampo(campo));
    campo.addEventListener('input', () => {
      // Remove erro enquanto digita
      campo.closest('.form-grupo')?.classList.remove('erro');
    });
  });

  // Envio do formulário
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Valida todos os campos
    let formValido = true;
    campos.forEach(campo => {
      if (!validarCampo(campo)) formValido = false;
    });

    if (!formValido) {
      exibirNotificacao('⚠️ Corrija os erros antes de enviar.', 'erro');
      return;
    }

    const btnEnviar = form.querySelector('button[type="submit"]');

    // Estado de carregamento
    btnEnviar.classList.add('carregando');
    btnEnviar.textContent = 'Enviando...';

    try {
      // Simula envio assíncrono (substitua pela sua API)
      await simularEnvio(obterDadosForm(form));

      exibirNotificacao('✅ Mensagem enviada com sucesso!');
      form.reset();
    } catch (erro) {
      exibirNotificacao('❌ Falha ao enviar. Tente novamente.', 'erro');
      console.error('Erro ao enviar formulário:', erro);
    } finally {
      btnEnviar.classList.remove('carregando');
      btnEnviar.textContent = 'Enviar Mensagem';
    }
  });
}

/**
 * Coleta dados do formulário
 * @param {HTMLFormElement} form
 * @returns {Object}
 */
function obterDadosForm(form) {
  const dados = {};
  new FormData(form).forEach((valor, chave) => {
    dados[chave] = valor;
  });
  return dados;
}

/**
 * Simula um envio de formulário (substitua por fetch real)
 * @param {Object} dados
 * @returns {Promise}
 */
function simularEnvio(dados) {
  console.log('Dados do formulário:', dados);
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

// ── 6. SISTEMA DE NOTIFICAÇÕES ────────────────────────────────

/**
 * Exibe uma notificação flutuante
 * @param {string} mensagem - Texto da notificação
 * @param {string} [tipo='sucesso'] - 'sucesso' ou 'erro'
 * @param {number} [duracao=4000] - Tempo em ms
 */
function exibirNotificacao(mensagem, tipo = 'sucesso', duracao = 4000) {
  // Remove notificação anterior se existir
  const anterior = sel('.notificacao');
  if (anterior) anterior.remove();

  const notif = document.createElement('div');
  notif.className = `notificacao ${tipo === 'erro' ? 'erro' : ''}`;
  notif.textContent = mensagem;

  document.body.appendChild(notif);

  // Força reflow para a transição funcionar
  requestAnimationFrame(() => {
    requestAnimationFrame(() => notif.classList.add('visivel'));
  });

  setTimeout(() => {
    notif.classList.remove('visivel');
    setTimeout(() => notif.remove(), 500);
  }, duracao);
}

// ── 7. FILTROS DO BLOG ────────────────────────────────────────

/**
 * Inicializa filtros de categoria no blog
 */
function iniciarFiltrosBlog() {
  const botoes = selTodos('.filtro-btn');
  const cards = selTodos('.card-blog[data-categoria]');

  if (botoes.length === 0) return;

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza botão ativo
      botoes.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');

      const filtro = btn.dataset.filtro;

      // Mostra/oculta cards
      cards.forEach(card => {
        const visivel = filtro === 'todos' || card.dataset.categoria === filtro;
        card.style.opacity = visivel ? '1' : '0.2';
        card.style.transform = visivel ? '' : 'scale(0.97)';
        card.style.pointerEvents = visivel ? '' : 'none';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      });
    });
  });
}

// ── 8. EFEITO DE DIGITAÇÃO (Typewriter) ───────────────────────

/**
 * Efeito de digitação em um elemento
 * @param {HTMLElement} elemento
 * @param {string[]} textos - Lista de textos para alternar
 * @param {number} velocidade - ms por caractere
 */
function iniciarTypewriter(elemento, textos, velocidade = 80) {
  if (!elemento) return;

  let textoIndex = 0;
  let charIndex = 0;
  let apagando = false;

  function digitar() {
    const textoAtual = textos[textoIndex];

    if (!apagando) {
      elemento.textContent = textoAtual.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === textoAtual.length) {
        // Pausa antes de apagar
        setTimeout(() => { apagando = true; digitar(); }, 2000);
        return;
      }
    } else {
      elemento.textContent = textoAtual.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        apagando = false;
        textoIndex = (textoIndex + 1) % textos.length;
      }
    }

    setTimeout(digitar, apagando ? velocidade / 2 : velocidade);
  }

  digitar();
}

// ── 9. ANO DINÂMICO NO FOOTER ─────────────────────────────────

/**
 * Atualiza o ano no footer automaticamente
 */
function atualizarAnoFooter() {
  const anoEl = sel('#ano-footer');
  if (anoEl) anoEl.textContent = new Date().getFullYear();
}

// ── 10. INICIALIZAÇÃO ─────────────────────────────────────────

/**
 * Inicializa todos os módulos quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', () => {
  iniciarNav();
  iniciarAnimacoesReveal();
  iniciarBarrasHabilidade();
  iniciarFormularioContato();
  iniciarFiltrosBlog();
  atualizarAnoFooter();

  // Typewriter no hero (só na index)
  const typeEl = sel('#typewriter');
  if (typeEl) {
    iniciarTypewriter(typeEl, [
      'Desenvolvedor Full Stack',
      'Entusiasta de Tecnologia',
      'Estudante de Dev Web',
      'Criador de Soluções'
    ]);
  }

  console.log('%c🚀 Blog carregado com sucesso!', 'color: #00f5d4; font-weight: bold; font-size: 14px;');
});
