//função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 6)

//função arrow 

const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 7))

//retorno implicito

const subtração = (a, b) => a - b;

console.log(subtração(5, 7))

const imprimir2 = a => console.log(a)

imprimir2(2)
