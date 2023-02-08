function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(11, 19))
console.log(soma(1.1, 5.6, 10))
console.log(soma('a', 'b', 'c'))