const pessoa = {
    nome: "Ari",
    idede: 29,
    peso: 56
}

console.log(pessoa)
console.log(Object.keys(pessoa))// chaves
console.log(Object.values(pessoa))// valores
console.log(Object.entries(pessoa))// lista das chaves e valores em array

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) //escrevendo os pares de acordo com os arrays


Object.defineProperty(pessoa, 'dataNacimento' /*chave*/, { // add um par e dar algumas caracteristicas
    enumerable: true, // vai ser inumerada nos pares
    Writable: false, // se vai poder ser alterada
    value: '07/02/2023' // valor inicial (valor)
})

console.log(pessoa.dataNacimento)

console.log(Object.keys(pessoa))



const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)// concatenar todos os objs

console.log(obj)

