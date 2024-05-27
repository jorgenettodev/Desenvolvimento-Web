let pix = {
    chavePix: "fulaninho@email.com",
    valorTransferencia: 200.0,
    dataTransacao: "11/02/24",
    pagador: {
        nome: "Ciclano da Silva",
        documento: "123.456.789-98",

    },
    recebedor: {
        nome: "Fulano de Souza",
        documento: "431.432.434-44",

    },
    historicoTransacoes: [
        { data: "10/04/24",
        valor: 250.0,
        descricao: "parcela do carro",
    }, 
    { data: "10/06/23",
    valor: 950.0,
    descricao: "pagamento do dia 10",
}

    ],
}

console.log(pix);