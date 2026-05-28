// FILTRAR POSTS POR TIPO
const filtros = document.querySelectorAll(".type-filtro");
const posts = document.querySelectorAll(".post-card");

filtros.forEach(function (filtro) {
  filtro.addEventListener("click", function () {
    const tipo = filtro.getAttribute("data-type");

    filtros.forEach(function (item) {
      item.classList.remove("active");
    });

    filtro.classList.add("active");

    posts.forEach(function (post) {
      if (tipo === "todos" || post.getAttribute("data-type") === tipo) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });
});


// PESQUISAR NO FEED
const barraPesquisa = document.querySelector(".search-bar");

barraPesquisa.addEventListener("input", function () {
  const texto = barraPesquisa.value.toLowerCase();

  posts.forEach(function (post) {
    const conteudo = post.innerText.toLowerCase();

    if (conteudo.includes(texto)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
});


const abas = document.querySelectorAll(".feed-tab");

abas.forEach(function (aba) {
  aba.addEventListener("click", function () {
    abas.forEach(function (item) {
      item.classList.remove("active");
    });

    aba.classList.add("active");

    alert("Feed alterado para: " + aba.innerText);
  });
});


// CURTIR POSTS
const botoesAcao = document.querySelectorAll(".post-action-btn");

botoesAcao.forEach(function (botao) {
  botao.addEventListener("click", function () {
    if (botao.innerText.includes("♥") || botao.innerText.includes("14") || botao.innerText.includes("7")) {
      botao.classList.toggle("liked");
      alert("Curtida registrada!");
    }
  });
});


// BOTÃO SEGUIR
const botoesSeguir = document.querySelectorAll(".btn-seguir");

botoesSeguir.forEach(function (botao) {
  botao.addEventListener("click", function () {
    if (botao.innerText === "Seguir") {
      botao.innerText = "Seguindo";
    } else {
      botao.innerText = "Seguir";
    }
  });
});