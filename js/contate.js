  function add() {
    const nome = document.getElementById("Nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const  nome2= document.getElementById("nome2").value;
    const  tipo= document.getElementById("tipo").value;
    const servico= document.getElementById("servico").value;
    const  observacao= document.getElementById("observacao").value;

    if (nome === "" || email === "" ||telefone === "" ||nome2 === "" ||tipo === "" ||servico === "" ||observacao === "" ){
        alert("Preencha todos os campos!");
        return;
    }
    else alert("Cadastro realizado com sucesso!");
    window.location.href = "../EstruturaDoProjeto/login.html";

};