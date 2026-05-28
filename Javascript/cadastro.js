const formulario = document.getElementById("registerForm");

const botao = document.querySelector("input");

botao.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("input");

  const nome = inputs[0].value;
  const email = inputs[1].value;
  const senha = inputs[2].value;
  const confirmar = inputs[3].value;

  if (nome === "" || email === "" || senha === "" || confirmar === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  alert("Cadastro realizado com sucesso!");
});
