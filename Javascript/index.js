const botaoLista = document.querySelector(".btn-lista");

botaoLista.addEventListener("click", function () {
  botaoLista.innerText = "Adicionado!";
  alert("Elden Ring foi adicionado à sua lista!");
});

//procurar jogo
const barraPesquisa = document.querySelector(".search-bar");
const cardsJogos = document.querySelectorAll(".jogos-card");

barraPesquisa.addEventListener("input", function () {
  const texto = barraPesquisa.value.toLowerCase();

  cardsJogos.forEach(function (card) {
    const nomeJogo = card.innerText.toLowerCase();

    if (nomeJogo.includes(texto)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

//curtir poster
const curtidas = document.querySelectorAll(".feed-action");

curtidas.forEach(function (curtida) {
  if (curtida.innerText.includes("♥")) {
    curtida.addEventListener("click", function () {
      alert("Você curtiu esse post!");
    });
  }
});
