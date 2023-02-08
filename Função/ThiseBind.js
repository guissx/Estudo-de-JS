const pessoa = {
    saudação: "BOM DIA",
        falar(){
            console.log(this.saudação)
        }
}

pessoa.falar()
const falar = pessoa.falar
falar()//a função falar nnn possui saudação 

const falarpessoa = pessoa.falar.bind(pessoa)//certeza de que vai apontar para pessoa
falarpessoa()
