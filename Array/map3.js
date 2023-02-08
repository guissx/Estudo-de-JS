Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}// map na mão

const carrinho = [
    '{ "nome": "Borracha", "preço": 3.60 }',
    '{ "nome": "Lapis", "preço": 2.50 }',
    '{ "nome": "Caderno", "preço": 45.00 }',
    '{ "nome": "Caneta", "preço": 7.33 }'
]

const obj = json => JSON.parse(json)
const apenaspreço = produto => produto.preço

const resultado = carrinho.map2(obj).map2(apenaspreço)

console.log(resultado)