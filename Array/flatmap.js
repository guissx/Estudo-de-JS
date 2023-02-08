const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Pedro',
        nota: 7.6
    }]
}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Julio',
        nota: 7.2
    }, {
        nome: 'Lucas',
        nota: 7.0
    }]
}]


const getNota = aluno => aluno.nota
const getnotasturma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getnotasturma)
console.log(notas1)
//flapmap é a intenção de criar um arry de array

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([]), this.map(callback)
}

const nota2 = escola.flatMap(getnotasturma)

console.log(nota2)