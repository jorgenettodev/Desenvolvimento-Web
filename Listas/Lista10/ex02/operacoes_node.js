const somar = (n1,n2) => {
    console.log(n1+n2);
}
const subtrair = (n1,n2) => {
    console.log(n1-n2);
}

const dividir = (n1,n2) => {
    console.log(n1/n2);
}

const multiplicar = (n1,n2) => {
    console.log(n1*n2);
}

// exporta o módulo
module.exports = {
    somar, dividir, subtrair, multiplicar
}