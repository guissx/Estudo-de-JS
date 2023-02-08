const peso1 = 1.0
const peso2 = Number('2');
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

let a1 = 9.88
let a2 = 7.4

const media = (a2 * peso2 + a1 * peso1)/ (peso1 + peso2)

console.log(media.toFixed(3))
console.log(media.toString(2))//binario
console.log(media.toString(16))// hexa
console.log(typeof media)//number
console.log(typeof Number)//função
