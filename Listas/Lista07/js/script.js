// conteudo principal
let conteudoPrincipal = document.querySelector('#conteudo__principal');

// banco de dados

let bancoDeDados = [
    {
        "nome": "Bicicleta",
        "descricao": "Bicicleta infantil aro 17",
        "imagem": "https://via.placeholder.com/150",
        "valor": "R$ 150,00"
    },
    {
        "nome": "Patinete",
        "descricao": "Patinete dobrável com 3 rodas",
        "imagem": "https://via.placeholder.com/150",
        "valor": "R$ 100,00"
    },
    {
        "nome": "Patins",
        "descricao": "Patins inline tamanho ajustável",
        "imagem": "https://via.placeholder.com/150",
        "valor": "R$ 200,00"
    },
    {
        "nome": "Skate",
        "descricao": "Skate profissional de madeira",
        "imagem": "https://via.placeholder.com/150",
        "valor": "R$ 250,00"
    },
    {
        "nome": "Caminhão de Brinquedo",
        "descricao": "Caminhão de brinquedo com controle remoto",
        "imagem": "https://via.placeholder.com/150",
        "valor": "R$ 180,00"
    },
    {
        "nome": "Boneca",
        "descricao": "Boneca que fala e canta",
        "imagem": "https://via.placeholder.com/150",
        "valor": "R$ 75,00"
    },
    {
        "nome": "Lego",
        "descricao": "Conjunto de construção Lego 500 peças",
        "imagem": "https://via.placeholder.com/150",
        "valor": "R$ 300,00"
    },
    {
        "nome": "Carrinho de Controle Remoto",
        "descricao": "Carrinho de controle remoto recarregável",
        "imagem": "https://via.placeholder.com/150",
        "valor": "R$ 120,00"
    }
]


function renderizarProdutos(bancoDeDados) {
    bancoDeDados.forEach(element => {
        let produto = document.createElement('div');
        produto.className = "conteudo__produto";

        let nomeProduto = document.createElement('h2');
        nomeProduto.textContent = element.nome;
        nomeProduto.className = "produto__nome"

        let descricaoProduto = document.createElement('p');
        descricaoProduto.textContent = element.descricao;
        descricaoProduto.className = "produto__descricao";

        let imagemProduto = document.createElement('img');
        imagemProduto.src = element.imagem;
        imagemProduto.className = "produto__imagem";

        let valorProduto = document.createElement('p');
        valorProduto.textContent = element.valor;
        valorProduto.className = "produto__preco";

        let botoes = document.createElement('div');
        botoes.className = "produto__botoes";

        let botaoComprar = document.createElement('button');
        botaoComprar.innerText = "Comprar";

        let botaoDetalhes = document.createElement('button');
        botaoDetalhes.innerText = "Detalhes";

        botoes.appendChild(botaoComprar);
        botoes.appendChild(botaoDetalhes);



        // anexa elementos ao produto

        produto.appendChild(imagemProduto);
        produto.appendChild(nomeProduto);
        produto.appendChild(descricaoProduto);
        produto.appendChild(valorProduto);
        produto.appendChild(botoes);

        // anexa o produto ao conteúdo principal

        conteudoPrincipal.appendChild(produto);
    });
}

renderizarProdutos(bancoDeDados);