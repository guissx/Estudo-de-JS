const aluno = [
    {nome: 'joao', nota: 7.9},
    {nome: 'julia', nota: 9.3}
]

//imperativo
let total1 = 0
for( let i = 0; i < aluno.length; i++){
    total1 += aluno[i].nota
}
console.log(total1/ aluno.length)

//Declarativo isso é mais interessante 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = aluno.map(getNota).reduce(soma)
console.log(total2/ aluno.length)