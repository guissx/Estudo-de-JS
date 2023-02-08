function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b +c
}

console.log(soma1())// valor setado 1
console.log(soma1(3, 3, 3))

//2

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //
    b = 1 in arguments ? b : 1// caso seja passado um argumento por b ele vai manter esse argumento, caso nn vai ser igul a 1
    c = isNaN(c) ? 1 : c// mais seguro para operações numericas, se nnn for um numero vai ser 1
    return a + b + c
}

console.log(soma2(), soma2(0, 0, 0), soma2(3, 3, 3))

//valor padrão

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(0, 0, 0), soma3(3, 3, 3))