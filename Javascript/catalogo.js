// PEGANDO ELEMENTOS
const barraPesquisa = document.querySelector(".search-bar");
const cards = document.querySelectorAll("#card");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnLimpar = document.getElementById("btnLimpar");
const anoMin = document.getElementById("anoMin");
const anoMax = document.getElementById("anoMax");


// PESQUISAR JOGOS
barraPesquisa.addEventListener("input", function () {
  const texto = barraPesquisa.value.toLowerCase();

  cards.forEach(function (card) {
    const nomeJogo = card.querySelector("h1").innerText.toLowerCase();

    if (nomeJogo.includes(texto)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


// FILTRAR POR ANO
btnFiltrar.addEventListener("click", function () {
  const min = Number(anoMin.value);
  const max = Number(anoMax.value);

  cards.forEach(function (card) {
    const textoAno = card.querySelector("#ano").innerText;
    const ano = Number(textoAno.replace("Ano:", "").trim());

    if (ano >= min && ano <= max) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


// LIMPAR FILTROS
btnLimpar.addEventListener("click", function () {
  barraPesquisa.value = "";
  anoMin.value = "";
  anoMax.value = "";

  cards.forEach(function (card) {
    card.style.display = "block";
  });
});


// BOTÃO MAIS INFORMAÇÕES
const botoesInfo = document.querySelectorAll(".saber-mais");

botoesInfo.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const card = botao.parentElement;
    const nomeJogo = card.querySelector("h1").innerText;

    alert("Mais informações sobre: " + nomeJogo);
  });
});