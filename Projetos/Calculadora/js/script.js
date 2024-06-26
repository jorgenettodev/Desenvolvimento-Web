let calculadora = document.querySelector("#calculadora");
let numeroDigitado = '';
let resultado = document.querySelector("#result");
// resultado = 

for (let i = 0; i <= 9; i++) {
    let botao = document.createElement('button');

    if (i % 2 == 0) {
        botao.className = "btn-par btn";
        // console.log(`${i} ${botao.className}`);
    } else {
        botao.className = "btn-impar btn";
        // console.log(`${i} ${botao.className}`);
    }
    botao.innerText = i;
    botao.value = i;
    botao.id = `btn-${i}`;
    calculadora.appendChild(botao);

    botao.addEventListener('click', (e) => {
        // console.log(e.target.innerText);
        numeroDigitado += Number(e.target.value);
        console.log(numeroDigitado);
        resultado.innerHTML = numeroDigitado;
    });


}

let criaBotao = (id, classe, valor) => {
    let botao = document.createElement('button');

    botao.id = id;
    botao.className = classe;
    botao.value = valor;
    botao.textContent = valor;
    
    calculadora.appendChild(botao);


}



criaBotao("btn-soma", "btn-calculo btn", "+");
criaBotao("btn-sub", "btn-calculo btn", "-");
criaBotao("btn-div", "btn-calculo btn", "/");
criaBotao("btn-mult", "btn-calculo btn", "*");
criaBotao("btn-result", "btn-calculo btn", "=");
criaBotao("btn-ponto", "btn-calculo btn", ".");

document.getElementById("btn-soma").addEventListener('click', (e) => {
    numeroDigitado += e.target.value;
    resultado.innerText = numeroDigitado;
})

document.getElementById("btn-sub").addEventListener('click', (e) => {
    numeroDigitado += e.target.value;
    resultado.innerText = numeroDigitado;
})

document.getElementById("btn-div").addEventListener('click', (e) => {
    numeroDigitado += e.target.value;
    resultado.innerText = numeroDigitado;
})

document.getElementById("btn-mult").addEventListener('click', (e) => {
    numeroDigitado += e.target.value;
    resultado.innerText = numeroDigitado;
})
document.getElementById("btn-ponto").addEventListener('click', (e) => {
    numeroDigitado += e.target.value;
    resultado.innerText = numeroDigitado;
})

let botaoResultado = document.querySelector("#btn-result");

botaoResultado.addEventListener('click', (e) => {
    resultado.textContent = eval(numeroDigitado);
})

let botaoLimpar = document.querySelector("#btn-limpar");

botaoLimpar.addEventListener('click', (e) => {
    numeroDigitado = '';
    resultado.innerText = '';
})