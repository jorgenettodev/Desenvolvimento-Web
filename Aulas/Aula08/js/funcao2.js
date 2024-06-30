let numero1 = document.getElementById("n1");
let numero2 = document.getElementById("n2");

function comparaValores() {
    if (Number(numero1.value) === Number(numero2.value)) {
        console.log(true);
    } else {
        console.log(false)
    }
}

function somar() {
    let resultado = Number(numero1.value) + Number(numero2.value);

    let res = document.getElementById("resultado");
    res.textContent = resultado;
}