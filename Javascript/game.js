//  ADICIONAR À LISTA
const btnAdicionar = document.querySelector(".adicionar");

btnAdicionar.addEventListener("click", function () {
  btnAdicionar.innerText = "Adicionado!";
  alert("Jogo adicionado à sua lista!");
});


// BOTÃO ZERADO
const btnZerado = document.getElementById("btnZerado");

btnZerado.addEventListener("click", function () {
  btnZerado.innerText = "✓ Zerado";
  alert("Jogo marcado como zerado!");
});


// CONTADOR DE CARACTERES 
const reviewText = document.getElementById("reviewText");
const charCount = document.getElementById("charCount");

reviewText.addEventListener("input", function () {
  charCount.innerText = reviewText.value.length + " / 500";

  if (reviewText.value.length > 500) {
    alert("A review passou de 500 caracteres!");
  }
});


// PUBLICAR AVALIAÇÃO
const btnEnviarReview = document.getElementById("btnEnviarReview");

btnEnviarReview.addEventListener("click", function () {
  const plataforma = document.getElementById("plataforma").value;
  const texto = reviewText.value;

  if (plataforma === "") {
    alert("Selecione uma plataforma!");
    return;
  }

  alert("Avaliação publicada com sucesso!");
});


// MOSTRAR FORMULÁRIO DE BUG
const btnReportarBug = document.getElementById("btnReportarBug");
const bugForm = document.getElementById("bugForm");

btnReportarBug.addEventListener("click", function () {
  bugForm.style.display = "block";
});


// CANCELAR BUG
const btnCancelarBug = document.getElementById("btnCancelarBug");

btnCancelarBug.addEventListener("click", function () {
  bugForm.style.display = "none";
});


// ENVIAR BUG
const btnEnviarBug = document.getElementById("btnEnviarBug");

btnEnviarBug.addEventListener("click", function () {
  const titulo = document.getElementById("bugTitulo").value;
  const plataformaBug = document.getElementById("bugPlat").value;
  const descricao = document.getElementById("bugDesc").value;

  if (titulo === "" || plataformaBug === "" || descricao === "") {
    alert("Preencha todos os campos do bug!");
    return;
  }

  alert("Bug enviado com sucesso!");
  bugForm.style.display = "none";
});


// CURTIR REVIEWS E BUGS
const botoesAcao = document.querySelectorAll(".post-action-btn");

botoesAcao.forEach(function (botao) {
  botao.addEventListener("click", function () {
    alert("Ação registrada!");
  });
});