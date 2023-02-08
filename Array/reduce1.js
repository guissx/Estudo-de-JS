const alunos = [
    { nome: 'João', nota: 7.4, bolsista: false},
    { nome: 'Pedro', nota: 9.1, bolsista: false},
    { nome: 'Davi', nota: 9.2, bolsista: true},
    { nome: 'Ryan', nota: 7.1, bolsista: false},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0 /*valor inicial do callback */)

console.log(resultado)