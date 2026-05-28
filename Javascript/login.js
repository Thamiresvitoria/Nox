const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const inputs = document.querySelectorAll("input");

    const email = inputs[0].value;

    const senha = inputs[1].value;

    if(email === "" || senha === "") {

        alert("Preencha todos os campos!");
        return;

    }

    alert("Login realizado com sucesso!");

});