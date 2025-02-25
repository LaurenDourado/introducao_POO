// criando a classe aluno

class Aluno{

    #nota
    constructor(nome, idade, nota){
        // o constructor é uma método tradicional
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
    }
        feliz = () => console.log(`${this.nome} Está feliz!`);
        vernota = () => this.#nota
}

const lauren= new Aluno("Lauren", 16, 66)

console.log(lauren.nome)
console.log(lauren.vernota())
console.log(`A aluna se chama ${lauren.nome} ,tem ${lauren.idade} anos e conseguiu ${lauren.vernota()} pontos na prova.`)



