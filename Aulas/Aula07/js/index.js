var bancoDeDados = [
    {
        nome: "Bolo de Murangu",
        descricao: "Melhor bolo do mundo",
        preco: 10000,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo tooooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de Cenoura",
        descricao: "Bolo de Pascoa",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    }
]
let conteudoPrincipal = document.getElementById('conteudo-principal');

for (let produto of bancoDeDados) {
    let conteudoProduto = document.createElement('div');
    conteudoProduto.className = "conteudo-produto";

    let produtoNome = document.createElement('h2');
    produtoNome.textContent = produto.nome;

    let imagem = document.createElement('img');
    imagem.src = produto.imagem;

    let descricaoProduto = document.createElement('p');
    descricaoProduto.textContent = produto.descricao;

    let precoProduto = document.createElement('p');
    precoProduto.textContent = `R$ ${produto.preco},00`;

    let botoes = document.createElement('div');

    let botaoComprar = document.createElement('button');
    botaoComprar.className = 'btn';
    botaoComprar.textContent = 'Comprar';

    let botaoDetalhes = document.createElement('button');
    botaoDetalhes.className = 'btn';
    botaoDetalhes.textContent = 'Detalhes';



    conteudoProduto.appendChild(imagem);
    conteudoProduto.appendChild(produtoNome);
    conteudoProduto.appendChild(descricaoProduto);
    conteudoProduto.appendChild(precoProduto);
    botoes.appendChild(botaoComprar);
    botoes.appendChild(botaoDetalhes);
    conteudoProduto.appendChild(botoes);




    conteudoPrincipal.appendChild(conteudoProduto);
}


