document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // impede recarregar a página

    let nome = document.getElementById("inome").value;
    let sobrenome = document.getElementById("isobrenome").value;

    document.body.innerHTML = `
        <h1>Dados recebidos!</h1>
        <p>Nome: ${nome}</p>
        <p>Sobrenome: ${sobrenome}</p>
    `;
});