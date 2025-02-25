// criando a classe aluno
class Aluno{
    constructor(nome, idade){
        // o constructor é uma método tradicional
        this.nome = nome;
        this.idade = idade;
    }
        estudar = () => console.log(`${this.nome} está estudando.`);
        feliz = () => console.log(`${this.nome} está feliz!`);
}

const lauren= new Aluno("Lauren", 16)
const duda= new Aluno("Duda", 17)
const nadja= new Aluno("Nadja", 25)
const raul= new Aluno("Raul", 27)
const paiola= new Aluno("Paiola", 17)
const laura = new Aluno("Laura", 17);

console.log(lauren.nome)

duda.estudar()

console.log(nadja.nome, nadja.idade)

raul.feliz()

console.log(paiola.nome, paiola.idade, paiola.feliz)

console.log(`${laura.nome} tem ${laura.idade} anos e ${laura.feliz()}`);
