class Pessoa {
    constructor(nome){
        this.nome = nome// passa o nome para o obj criado
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)//precisa do this pq é umma function declarada
    }
}


const p1 = new Pessoa("Pedro")
p1.falar()

const pessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)// sem this, arrow function
    }
}

const p2 = pessoa("GUSTAVO")
p2.falar()
