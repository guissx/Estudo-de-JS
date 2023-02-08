// sem callback
const notas = [7.7, 9.4, 43, 3.3, 4.5]
let notasbaixas = []
for(let i in notas) {
    if(notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)
//com callback
notasbaixas = notas.filter(function (nota){
    return nota < 7
})

console.log(notasbaixas)

notasbaixas = notas.filter(nota => nota < 7) 
console.log(notasbaixas)
//facilita a vida