let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //string preenchida 
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = true))
console.log(!!Infinity)


console.log("Os falsos....")

console.log(!!0)
console.log(!!'')// string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar")

console.log(!!('' || null || ' '))

console.log(('' || null || 'epa'))// retorna o primeiro verdadeiro

let nome = ''
console.log(nome || 'DESCONHECIDO')

nome = 'GUSTAVO'
console.log(nome || 'DESCONHECIDO')