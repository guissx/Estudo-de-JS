function criaproduto(nome, preço) {
    return{
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(criaproduto('Celular', 3000))
console.log(criaproduto('PC', 6000))