console.log(Math.ceil(6.9))

const ob1 = {}
ob1.nome = "BOLA"
console.log(ob1.nome)

function obj(nome) {
    this.nome = nome
}

const ob2 = new obj('CADEIRA')
const ob3 = new obj('MESA')

console.log(ob2.nome)
console.log(ob3.nome)