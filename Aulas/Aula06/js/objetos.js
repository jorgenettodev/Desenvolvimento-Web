class Pessoa {
    _nome;
    _idade;

    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
}

let novaPessoa = new Pessoa("Jorge", 27);

// console.log(novaPessoa);

let pessoa = {
    nome: "Maria",
    idade: 28,

    dizerOla() {
        console.log(`Olá, eu sou ${this.nome}`);
    },
    filhos: [
        {
            nome: "joaozinho",
            idade: 11,
        },
        {
            nome: "Mariazinha",
            idade: 7,
        }
    ]

}

console.log(pessoa.filhos);