const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// massa quebrou o carro, tira o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // add no final
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('Halmilton')// add no inicio
console.log(pilotos)

//splice pode add e remover
//add
pilotos.splice(2, 0, 'Massa', 'Bottas') // add sem tirar nenhum termo
console.log(pilotos)

//remover
pilotos.splice(2, 2)// tirar 2 a partir do indice 2
console.log(pilotos)

const alguns = pilotos.slice(2)// novo array
console.log(pilotos)
console.log(alguns)// a partir do indice 2 de pilotos

const alguns2 = pilotos.slice(0, 3) // pegar do indice 0 excluindo o indice 3
console.log(pilotos)
console.log(alguns2)

