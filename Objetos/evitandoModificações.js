// object.preventeExtensions NÃO PODE ADICIONAR, MAS PODE ADICIOONAR E MODIFICAR

const produto = Object.preventExtensions({
    Name: 'qualquer', preço: 2.93, tag: 'promo'
})// torna-lo nn extensivel

console.log('Extensível', Object.isExtensible(produto)) //testa se é um obj extensivel

produto.nome = 'Burracha' // modifica
produto.descrição = 'borracha verde'// mas nn adiciona
delete produto.tag// apaga
console.log(produto)

// object.seal NÃO PODE ADICIONAR NEM EXCLUIR, APENAS MODIFICAS

const pessoa = { nome: 'Julia', idade: 19}
Object.seal(pessoa)// selar
console.log('Selado:', Object.isSealed(pessoa))// ver se está selado


pessoa.sobrenome = 'cabral'
console.log(pessoa.sobrenome)// nn definido pois está selado
delete pessoa.nome
console.log(pessoa.nome)// NN DELETA
pessoa.nome = 'ZUMA'
console.log(pessoa.nome)// mas pode modificar

//Object.freeze = selado + valores constantes