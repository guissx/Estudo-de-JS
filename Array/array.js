console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('joao', 'pedro', 'julia')
console.log(aprovados)

aprovados = ['joao', 'pedro', 'julia']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'// add, mas é melhor para modificar elementos

aprovados.push('gustavo')// add no arrayy
console.log(aprovados.length)

aprovados[9] = 'Paula'
console.log(aprovados.length)
console.log(aprovados[7] === undefined)


console.log(aprovados)
aprovados.sort()// ORDENA O ARRAY, ORGANIZA
console.log(aprovados)

//EXCLUIR
delete aprovados[1]/
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['joao', 'pedro', 'julia']
aprovados.splice(0, 2)// a partir da posição tal, tantos elementos apagar
console.log(aprovados)
console.log(aprovados[0])// julia passou a ser o indice 0 e nn se manteve como indice 2

aprovados = ['joao', 'pedro', 'julia']
aprovados.splice(0, 2, 'gustavo', 'pedro')// apagou os indices 0 e 1 e substituiu
console.log(aprovados)


