class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
        apresentar = () => console.log(`${this.nome}.`);
}

class Aluno extends Pessoa{
   
        apresentar = () => console.log(`Olá meu nome é ${this.nome} , e sou aluna.`);
}

class Professor extends Pessoa{
 
        apresentar = () => console.log(`Olá meu nome é ${this.nome} , e sou professora.`);
}

const lauren = new Aluno("Lauren");
const nadja = new Professor("Nadja");

lauren.apresentar();
nadja.apresentar();
