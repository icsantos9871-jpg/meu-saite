# 🚀 DEV.BLOG — Blog Pessoal

> Site pessoal profissional desenvolvido com HTML5, CSS3 e JavaScript puros para hospedagem no GitHub Pages.

---

## 📁 Estrutura de Pastas

```
meu-site/
├── index.html          → Página inicial (Hero, Sobre, Projetos, Blog preview)
├── blog.html           → Listagem de posts + artigos completos
├── curriculo.html      → Currículo com timeline e barras de habilidades
├── contato.html        → Formulário de contato com validação JS
└── assets/
    ├── css/
    │   └── estilo.css  → Folha de estilos principal (tema dark neon)
    ├── js/
    │   └── app.js      → Lógica: nav, animações, validação, filtros
    └── imagens/
        └── foto-perfil.jpg  → Foto de perfil (adicione sua foto aqui)
```

### Mapa de Links

| Arquivo          | URL relativa     | Descrição                      |
|------------------|------------------|-------------------------------|
| `index.html`     | `/`              | Página principal               |
| `blog.html`      | `/blog.html`     | Blog com filtros por categoria |
| `curriculo.html` | `/curriculo.html`| Currículo e habilidades        |
| `contato.html`   | `/contato.html`  | Formulário de contato          |
| `assets/css/`    | `/assets/css/`   | Folhas de estilo               |
| `assets/js/`     | `/assets/js/`    | Scripts JavaScript             |
| `assets/imagens/`| `/assets/imagens/`| Imagens e ícones              |

---

## 💻 Especificação Mínima de Hardware

Para **acessar** o site normalmente:

| Componente   | Mínimo                              |
|--------------|-------------------------------------|
| Processador  | Dual-core 1.0 GHz (x86 ou ARM)     |
| Memória RAM  | 1 GB                                |
| Armazenamento| 50 MB livres (cache do navegador)   |
| Tela         | 320px de largura (smartphones)      |
| Conexão      | 512 Kbps (EDGE/3G básico)           |
| Navegador    | Chrome 80+, Firefox 75+, Safari 13+ |
| JavaScript   | Habilitado                          |

> ⚠️ Dispositivos abaixo dessas especificações podem exibir o site sem animações CSS3 ou com carregamento lento das fontes do Google Fonts.

---

## ⚡ Especificação Recomendada de Hardware

Para **acesso pleno** com todas as animações, efeitos de glassmorphism e fontes customizadas:

| Componente   | Recomendado                                       |
|--------------|---------------------------------------------------|
| Processador  | Quad-core 2.0 GHz+ (ex: Intel i3 8ª geração+)   |
| Memória RAM  | 4 GB+                                             |
| Armazenamento| 100 MB livres                                     |
| Tela         | 768px+ (tablet ou desktop)                        |
| Resolução    | 1280×720 (HD) ou superior                         |
| GPU          | Aceleração de hardware habilitada no navegador    |
| Conexão      | 5 Mbps+ (Wi-Fi ou 4G)                             |
| Navegador    | Chrome 110+, Firefox 115+, Edge 110+, Safari 16+ |

> 💡 As fontes (Orbitron, Exo 2, JetBrains Mono) são carregadas do Google Fonts. Uma conexão estável garante carregamento rápido e sem FOUT (Flash of Unstyled Text).

---

## 🛠️ Ferramentas de Desenvolvimento

Todas as ferramentas abaixo são **gratuitas**.

### Editor de Código — VS Code *(obrigatório)*

Download: https://code.visualstudio.com

**Extensões recomendadas:**

| Extensão           | Função                                          |
|--------------------|-------------------------------------------------|
| Live Server        | Abre o site no navegador e atualiza ao salvar  |
| Prettier           | Formata o código automaticamente               |
| Auto Rename Tag    | Renomeia tags HTML em par                       |
| CSS Peek           | Navega até definições CSS ao passar o mouse    |
| IntelliCode        | Sugestões de código com IA                      |

### Navegador — Google Chrome *(obrigatório)*

- Pressione `F12` para abrir o DevTools
- Use o ícone 📱 para testar responsividade
- Aba Console: verifique erros de JavaScript
- Aba Network: monitore carregamento de arquivos

### Fontes — Google Fonts *(obrigatório)*

Site: https://fonts.google.com

Fontes utilizadas neste projeto:
- **Orbitron** — Títulos e logo (estilo tech/futurista)
- **Exo 2** — Corpo do texto (legibilidade)
- **JetBrains Mono** — Código e tags (monospaced)

### Hospedagem — GitHub Pages *(obrigatório)*

Como publicar:
1. Crie um repositório no GitHub
2. Faça push de todos os arquivos
3. Vá em `Settings > Pages`
4. Selecione `Branch: main` e pasta `/ (root)`
5. Acesse: `https://seuusuario.github.io/nome-do-repo`

### Paleta de Cores — Coolors *(opcional)*

Site: https://coolors.co

Paleta usada neste projeto:
- `#050a10` — Background principal
- `#00f5d4` — Neon cyan (destaque primário)
- `#ff6b35` — Laranja (destaque secundário)
- `#e0eaf5` — Texto principal
- `#7a9bb5` — Texto suave

---

## 📋 Etapas de Desenvolvimento

| Etapa | Requisito             | Descrição                                                                 | Status |
|-------|-----------------------|---------------------------------------------------------------------------|--------|
| 1     | Planejamento          | Definição do tema visual, posts do blog, protótipo                       | ✅     |
| 2     | Estrutura HTML        | Criação das 4 páginas com tags semânticas (`section`, `nav`, `header`)  | ✅     |
| 3     | Estilo CSS            | Cores, fontes, layout responsivo, variáveis CSS, botões neon             | ✅     |
| 4     | JavaScript            | Validação de formulário, animações, filtros do blog, typewriter          | ✅     |
| 5     | Revisão               | Testes no desktop e mobile, revisão de comentários no código             | ⬜     |
| 6     | Entrega               | Publicação no GitHub Pages + envio do link                               | ⬜     |

---

## ✅ Requisitos por Disciplina

### HTML5
- [x] Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [x] Formulário com campos tipados (`type="email"`, `type="text"`)
- [x] Atributos de acessibilidade: `aria-label`, `aria-expanded`, `role="alert"`
- [x] Meta tags: `charset`, `viewport`, `description`
- [x] Links externos (Google Fonts) e internos (entre páginas)
- [x] Listas semânticas (`<ul>`, `<li>`) na navegação
- [x] Imagens com `alt` (placeholder com emoji)

### CSS3
- [x] Variáveis CSS (`--cor-neon`, `--fonte-titulo`, etc.)
- [x] Flexbox (nav, hero, cards, botões)
- [x] CSS Grid (projetos, blog, currículo, footer)
- [x] Media queries: 900px e 600px
- [x] Animações: `@keyframes`, `transition`, `animation`
- [x] Pseudo-elementos: `::before`, `::after`
- [x] Pseudo-classes: `:hover`, `:focus`, `:nth-child`
- [x] `clamp()` para tipografia responsiva
- [x] `backdrop-filter` (glassmorphism no header)
- [x] Scrollbar customizada

### JavaScript
- [x] `querySelector` / `querySelectorAll`
- [x] Manipulação de classes: `classList.add/remove/toggle`
- [x] Eventos: `click`, `scroll`, `submit`, `blur`, `input`
- [x] Intersection Observer (animações ao rolar)
- [x] Validação de formulário (campos obrigatórios, e-mail, mínimo de caracteres)
- [x] `async/await` com `try/catch`
- [x] `setTimeout` / `requestAnimationFrame`
- [x] Template literals
- [x] Arrow functions
- [x] Destructuring e spread operator
- [x] `dataset` para ler atributos `data-*`
- [x] `FormData` para coletar dados do formulário

---

## 📦 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seuusuario/meu-site.git

# 2. Abra no VS Code
code meu-site

# 3. Instale a extensão Live Server
# Clique com botão direito no index.html > "Open with Live Server"
```

Ou simplesmente abra o arquivo `index.html` no navegador.

---

## 🎨 Personalização

### Trocar seu nome
Pesquise por `Seu Nome` em todos os arquivos HTML e substitua.

### Adicionar sua foto
Coloque sua foto em `assets/imagens/foto-perfil.jpg` e no `index.html` descomente:
```html
<img src="assets/imagens/foto-perfil.jpg" alt="Foto de perfil" />
```
e comente/remova o `<div class="hero-foto-placeholder">`.

### Alterar as cores
No `estilo.css`, modifique as variáveis na seção `:root`:
```css
--cor-neon: #00f5d4;      /* Cor principal neon */
--cor-acento: #ff6b35;    /* Cor de destaque */
```

### Ativar envio real do formulário
No `app.js`, substitua a função `simularEnvio()` por um `fetch()` para
sua API preferida (Formspree, EmailJS, etc.).

---

## 📅 Prazo de Entrega

**18 de junho de 2026**

Link para entrega: *(formulário fornecido pelo professor)*

---

## ❓ Dúvidas Frequentes

| Dúvida                                      | Resposta                                                         |
|---------------------------------------------|------------------------------------------------------------------|
| Posso usar framework/biblioteca?            | ❌ Não. Apenas HTML, CSS e JavaScript puros.                    |
| Posso usar um template pronto?              | ❌ Não. Todo código deve ser original.                          |
| O conteúdo do blog pode ser fictício?       | ✅ Sim, mas deve ser texto original escrito por você.           |
| Posso fazer em dupla?                       | ❌ Não. Projeto individual.                                     |
| E se meu site não ficar bonito?             | Um site simples e bem estruturado vale mais que um inconsistente.|
| Posso fazer diferente do exemplo norteador? | ✅ Sim, é incentivado. Não esqueça do tema e dos requisitos.    |

---

## 📄 Licença

Projeto acadêmico de uso pessoal. Código original desenvolvido pelo aluno.
