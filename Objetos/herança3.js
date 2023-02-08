const pai = { nome: 'Pedro', corCabelo: 'preto'}


const filha1 = Object.create(pai)// passando prototype usando create
filha1.nome = 'Gisele'
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: { value: 'Gabriela', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha1.nome = 'Carla'// nn vai mudar
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? // saber se ta atributo vem dela ou por herança
        console.log(key) : console.log(`Por herança ${key}`)
}