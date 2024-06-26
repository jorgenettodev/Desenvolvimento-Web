import { somar, subtrair, dividir, multiplicar} from './operacoes_web.js';

let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');


let btnCalcular = document.querySelector("#calcular")

btnCalcular.addEventListener('click', (e) => {
    let numero1 = Number(n1.value);
    let numero2 = Number(n2.value);

   somar(numero1, numero2)
   subtrair(numero1, numero2)
   multiplicar(numero1, numero2)
   dividir(numero1, numero2)
});