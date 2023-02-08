//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

imprimirSoma(2, )// 2 + undifined = NaN

imprimirSoma(2, 10, 5, 6)// ignorar os outros 2

imprimirSoma()// NaN

//função com retorno

function soma(a, b = 0){ // b vai ser 0 caso nada seja passado
    return a + b
}

console.log(soma(2,5))

console.log(soma(2))

