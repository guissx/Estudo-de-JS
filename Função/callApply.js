function getpreço(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preço * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preço: 4632,
    desc: 0.12,
    getpreço
}

console.log(produto.getpreço()) // chamar passando um obj

const avião = {
    preço: 200000,
    desc: 0.09
}

console.log(getpreço.call(avião))// outra forma de chamar a função chamando o obj

console.log(getpreço.apply(avião))


console.log(getpreço.call(avião, 0.17, '$'))
console.log(getpreço.apply(avião, [0.17, '$']))//passando novos parametros o applyy passa por array
