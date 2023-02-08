let valor // nn inicializado 
console.log(valor)

valor = null// ausencia de valor, não aponta para nenhum endereçp de memoria 
console.log(valor)
//console.log(valor.toString()) ERR0!!

const produto = {}
console.log(produto.preço)

produto.preço = 45

console.log(produto)

produto.preço = undefined//evitar

console.log(!!produto.preço)
console.log(produto)

produto.preço = null //sem preço
console.log(!!produto.preço)
console.log(produto)

//usar null


