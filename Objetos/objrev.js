// coleção dinâmica de pares chave/valor
const produto = new Object

produto.nome = "MESA"
produto["Marca do produto"] = "Generica"
produto.preço = 2339

console.log(produto)
delete produto["Marca do produto"]

console.log(produto)

const carro = {
    modelo: "A4",
    idade: 56,
    endereço: {
        rua: "ACM",
        numero: 323
    },
    condutores: [{
        nome: "João",
        idade: 19
    }, {
     nome: "Joana",
     idade: 45
    }, {
        nome: "Ana",
        idade: 36
    }],
    calcularValorSeguro: function() {
        // analise
    }
}

console.log(carro.endereço.numero + ' ' + carro.endereço.rua)

carro.endereço.numero = 343
carro['endereço']['rua'] = "PARALELA"
console.log(carro.endereço.numero + ' ' + carro.endereço.rua)

console.log(carro)

delete carro.condutores// deletar sessãoos

console.log(carro)

delete carro.calcularValorSeguro// deletar função
console.log(carro)