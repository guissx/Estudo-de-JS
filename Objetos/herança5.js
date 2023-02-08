console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('') // split para criar um array com todas as letras da string, reverse para inverter tudo, e join para junstar numa nova string
}

console.log('GUSTAVO FERREIRA'.reverse())

Array.prototype.first = function () {
    return this[3]// indice
}

let a = ['P', 23, 7, 'Gustavo']

console.log(a.first())