let inputCEP = document.querySelector("#input-cep");
let btnBuscarCEP = document.querySelector("#btn-cep");
let conteudoPrincipal = document.getElementById('conteudo-principal');

const buscarCEP=  (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        methods: 'GET'
    })
        .then(resposta => resposta.json())
        .then(dados => {
            conteudoPrincipal.innerHTML = `
            <h1>Endereço</h1>
            <p>CEP: ${dados.cep}</p>
            <p>Endereço: ${dados.bairro}</p>
            <p>Endereço: ${dados.logradouro}</p>
            <p>Cidade: ${dados.localidade} - ${dados.uf}</p>
            `;
        });


    
}

btnBuscarCEP.addEventListener('click', e => {
    let cep = inputCEP.value;
    buscarCEP(cep);

});

let dados = {
    imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
}

let conteudoImagem = document.querySelector("#conteudo-imagem");

let imagem = document.createElement('img');
imagem.src = dados.imagem;

conteudoImagem.append(imagem);