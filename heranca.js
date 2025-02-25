class Pessoa{
    constructor(nome, idade){
        
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

class Aluno extends Pessoa{
    estudar = () => console.log(`${this.nome} está estudando.`)

}

class Professor extends Pessoa{
    ensinar = () => console.log(`${this.nome} está ensinando.`)

}


// Criando uma instância de Pessoa
const lauren = new Aluno("Lauren", 16);
const nadja = new Professor("Nadja", 27);
const raul = new Professor("Raul", 27)
const duda = new Aluno("Duda", 16)

// Chamando o método para se apresentar
lauren.apresentar(), nadja.apresentar(), duda.apresentar(), raul.apresentar();
lauren.estudar(), duda.estudar();
nadja.ensinar(), raul.ensinar();
