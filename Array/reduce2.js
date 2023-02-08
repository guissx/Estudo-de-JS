const alunos = [
    { nome: 'João', nota: 7.4, bolsista: false},
    { nome: 'Pedro', nota: 9.1, bolsista: false},
    { nome: 'Davi', nota: 9.2, bolsista: true},
    { nome: 'Ryan', nota: 7.1, bolsista: false},
]

// todos os alunos são bolsistas??

const todos = (resultado, bolsista) => resultado && bolsista
const resultado = alunos.map(b => b.bolsista).reduce(todos)
console.log(resultado)

//um deles é bolsista??

const um = (resultado, bolsista) => resultado || bolsista
const resultado2 = alunos.map(b => b.bolsista).reduce(um)
console.log(resultado2)

