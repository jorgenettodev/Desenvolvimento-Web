let taxaIr = 0.15;

let inputSalarioBruto = document.querySelector('#input-salario-bruto');
let inputSalarioValorLiquido = document.querySelector('#salario-valor-liquido');
let inputTaxaIr = document.querySelector('#input-valor-ir');

let btnCalcular = document.querySelector('#btn-calcular');

btnCalcular.addEventListener('click', () => {
    console.log('clickou');
    let valorBruto = inputSalarioBruto.value;
    let valorIr = valorBruto * taxaIr;
    let valorLiquido = valorBruto - valorIr;
    inputTaxaIr.value = valorIr;

    inputSalarioValorLiquido.value = valorLiquido;
});