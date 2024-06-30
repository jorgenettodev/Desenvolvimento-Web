let botao = document.querySelector('#btn-login');
let inputValorBruto = document.getElementById('valor-bruto');

let inputValorLiquido = document.getElementById('valor-liquido');

let taxa = 0.3;

let clicar = () => {
    inputValorLiquido.value = Number(inputValorBruto.value)* taxa;
    console.log('clickou');
}

botao.addEventListener('blur', clicar);