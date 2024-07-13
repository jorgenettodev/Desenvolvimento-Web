let cardapio = [
    {
        nome: "tilapia",
        valor: 30
    },
    
]

// METODO HTTP: GET buscar produto no cardápio
// get cardapio

console.log(cardapio);

// METODO HTTP: Post adicionar produto no cardápio
cardapio.push({
    nome: "Filé de frango",
    valor: 25
});

console.log(); // pula linha
console.log(cardapio);