// tags
let botoes = document.querySelector("#botoes");
let display = document.querySelector("#display");

// display.innerText = 0;

let bancoDeDados = {
    7: 7,
    8: 8,
    9: 9,
    "+": "+",
    4: 4,
    5: 5, 
    6: 6,
    "-": "-",
    1: 1, 
    2: 2,
    3: 3,
    0:0,
}


for (botao in bancoDeDados) {
    let btn = document.createElement('div');
    btn.className = 'botoes__botao';


    btn.innerText = botao;

    if (btn.innerText == "+" | btn.innerText == "-") {
        btn.classList.add("operator");
    }
    // console.log(btn.innerHTML);

    botoes.appendChild(btn);
}

let number1 = 0;
let number2 = 0;

botoes.addEventListener('click', (e) => {
    // se não for um botão, retorna
    if (e.target.className != 'botoes__botao') {
        return;
    }

    let botaoClicado = e.target.innerText;

    display.innerText += botaoClicado 
});

let botoesOperacao = document.querySelectorAll(".operator");

botoesOperacao.forEach(botaoOperacao => {
    botaoOperacao.addEventListener('click', (e) => {
        let operacao = e.target.innerText;
    
        console.log(operacao);
    
        if (number1 == 0) {
            number1 = Number(display.innerText);
            display.innerText = 0;
            console.log(`Numero 1 = ${number1}`);
        }
    
        if (number2 == 0) {
            number2 = Number(display.innerText);
            console.log(`Numero 2 = ${number2}`);
        }

        let operador = (operacao == "+") ? somar : subtrair;
    
        if (number1 != 0 && number2 != 0) {
            display.innerText = calcular(operador, number1, number2);
        }   
        
    
    
    })
});



// funcoes

let somar = (a,b) => {
    return a + b;
}

let subtrair = (a, b) => {
    return a - b;
}

let calcular = (operador, a, b) => {
    return operador(a,b);
}