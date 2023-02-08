//literal
const obj1 = {

}

// obj em JS
const obj2 = new Object

//função construtora
function Produto(nome, preço, desc) {
    this.nome = nome
    this.getpreçoComDesconto = () => {
        return preço * (1 - desc)
    }
}

const p1 = new Produto('LAPIS', 2.5, 0.1)
const p2 = new Produto('MARCADOR DE TEXTO', 7.5, 0.2)

console.log(p1.getpreçoComDesconto(), p2.getpreçoComDesconto())

// factory

function CriarFuncionario(nome, salariobase, faltas){
    return{
        nome,
        salariobase,
        faltas,
        getSalario(){
            return (salariobase / 30) * (30 - faltas)
       }
    }
}

const f1 = CriarFuncionario('Joana', 8000, 3)
const f2 = CriarFuncionario('Pedro', 8000, 1)

console.log(f1.getSalario())
console.log(f2.getSalario())

// create parte de herança