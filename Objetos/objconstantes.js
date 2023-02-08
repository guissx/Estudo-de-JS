//pessoa --> 123 -> {...}
const pessoa = {nome: "Gustavo"}

//pessoa -> 321 -> {...}
//pessoa = {nome: "Zoca"}
// pessa é constante nn pode apontar para outro endereço, ERRO

Object.freeze(pessoa)// congelou o obj, ninguem muda ele

pessoa.nome = "Zoca"

console.log(pessoa.nome)

const pessoaconst = Object.freeze({nome: "Pedro"})// criar já sendo constante congelado


console.log(pessoaconst.nome)