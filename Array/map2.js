const carrinho = [
    '{ "nome": "Borracha", "preço": 3.60 }',
    '{ "nome": "Lapis", "preço": 2.50 }',
    '{ "nome": "Caderno", "preço": 45.00 }',
    '{ "nome": "Caneta", "preço": 7.33 }'
]

const obj = json => JSON.parse(json)
const apenaspreço = produto => produto.preço

const resultado = carrinho.map(obj).map(apenaspreço)

console.log(resultado)