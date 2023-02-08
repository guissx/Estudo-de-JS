function MeuObj() {}

console.log(MeuObj.prototype)

const obj1 = new MeuObj
const obj2 = new MeuObj

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObj.prototype === obj1.__proto__)

MeuObj.prototype.nome = 'Anonimo'

MeuObj.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObj.prototype
obj3.nome = "obj3"
obj3.falar()

//resumo
console.log((new MeuObj).__proto__ === MeuObj.prototype)
console.log(MeuObj.__proto__ === Function.prototype)
console.log(Object.prototype.__proto__ === null)
//LOUCURAAAAAAAAAAAAAAAAAAA...