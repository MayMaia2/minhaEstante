function enviarDadosForm(event) {
    event.preventDefault();

    document.getElementById("resultadoLivro").style.display = "block";

    let titulo = document.getElementById("ipTitulo").value;
    let autor = document.getElementById("ipAutor").value;

    let genero = document.getElementById("slGenero");
    let generoSelecionado = genero.options[genero.selectedIndex].text;

    let preco = document.getElementById("ipPreco").value;

    let lido = document.getElementById("slLido");
    let lidoSelecionado = lido.options[lido.selectedIndex].text;

    let observacao = document.getElementById("taObservacao").value;

    document.getElementById("resposta").innerText = "Livro Cadastrado!";
    document.getElementById("pTitulo").innerText = titulo;
    document.getElementById("pAutor").innerText = "Autor: " + autor;
    document.getElementById("pGenero").innerText = "Gênero: " + generoSelecionado;
    document.getElementById("pPreco").innerText = "Preço: R$ " + preco;
    document.getElementById("pLido").innerText = "Já foi lido? " + lidoSelecionado;
    document.getElementById("pObservacao").innerText = "Observação: " + observacao;
}