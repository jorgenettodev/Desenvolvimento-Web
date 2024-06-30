let valor = 100;
let ir = 0.5;
let iof = 0.38;

let calcularValorLiquido = (valor, taxa1, taxa2) => {
    return valor * taxa1 * taxa2;
}

let imprimeResultado = (cb) => {
    let resultado = cb(valor, ir,iof);
    console.log(resultado);
}


imprimeResultado(calcularValorLiquido);