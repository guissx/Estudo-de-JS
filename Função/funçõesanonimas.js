const soma = function (x, y) {
    return x + y
}

const resultado = function (a, b, op = soma) {
    console.log(op(a, b))
}

resultado(3, 4)
resultado(3, 4, soma)
resultado(3, 4, function (x, y) {
    return x - y
}
)

resultado(3, 4, (x, y ) => x * y)