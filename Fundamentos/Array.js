const valores = [5, 8.8, 0.4, 7.7]

console.log(valores[2])// 0.4
console.log(valores[3])

valores[4] = 10

console.log(valores)


//valores[10] = 23
//console.log(valores)

console.log(valores.length)//tamanho

valores.push({id: 3}, false, null, 'teste')// add coisas no array

console.log(valores)

console.log(valores.pop())//tirar o ultimo termo

delete valores[0]//deletar algum elemento
console.log(valores)

console.log(typeof valores)// array é um objeto