const produtos = [
    {nome: 'Notebook', preço: 3982, fragil: true},
    {nome: 'Ipad', preço: 2377, fragil: true},
    {nome: 'Copo de Vidro', preço: 33, fragil: true},
    {nome: 'Copo Plastico', preço: 19, fragil: false}
]

const caro = produto => produto.preço >= 500

const fragil = produto => produto.fragil 

const carofragil = produtos.filter(caro).filter(fragil)

console.log(carofragil)
