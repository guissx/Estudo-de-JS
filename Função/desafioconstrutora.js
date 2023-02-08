function nome(nome) {
    this.nome = nome
    this.exec = () => console.log(`Meu nome é ${this.nome}`)
}
 
const p1 = new nome("JOÃO")
p1.exec()