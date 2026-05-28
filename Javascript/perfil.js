// EDITAR BIO
const bio = document.querySelector("header section:nth-child(2) p");

bio.addEventListener("click", function () {
  const novaBio = prompt("Digite sua nova bio:");

  if (novaBio !== "" && novaBio !== null) {
    bio.innerText = novaBio;
  }
});


// JOGOS FAVORITOS
const jogosFavoritos = document.querySelectorAll("main section:first-child article");

jogosFavoritos.forEach(function (jogo) {
  jogo.addEventListener("click", function () {
    const nomeJogo = jogo.querySelector("h3").innerText;

    alert("Você clicou em " + nomeJogo);
  });
});


// MARCAR ITEM DA LISTA DE DESEJOS
const desejos = document.querySelectorAll("ul li");

desejos.forEach(function (item) {
  item.addEventListener("click", function () {
    item.style.textDecoration = "line-through";
    item.style.opacity = "0.6";
  });
});


// MUDAR STATUS DOS BUGS
const statusBugs = document.querySelectorAll("main section:nth-of-type(3) article p:last-child");

statusBugs.forEach(function (status) {
  status.addEventListener("click", function () {
    if (status.innerText === "Status: Em análise") {
      status.innerText = "Status: Resolvido";
    } else {
      status.innerText = "Status: Em análise";
    }
  });
});