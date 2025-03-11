class Pessoa{
    constructor(nome){
        if(this.constructor===Pessoa){
            throw new error("Não é possível criar este objeto")      
        }
        this.nome = nome;
    }
}

class Aluno extends Pessoa{}

const lauren = new Aluno ("Lauren");

console.log(lauren.nome)