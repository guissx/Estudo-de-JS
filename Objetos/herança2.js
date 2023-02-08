//cadeia de prototipo
Object.prototype.attr0 = '0'
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3', attr1: 'G'}
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
//apesar do pai ter o attr3 o filho pegou o que consta mais proximo, ou seja nele mesmo, mesma coisa acontece com o attr1, o pai já possui, nn precisa ir buscar no avo

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax 
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40', 
    velMax: 324,  // shadowing, vai substituir a velocidade total de carro que seria o pai
    status() {
        return `${this.modelo}: ${super.status()}` // o super para chamar o metodo do meu prototype
    }
}


const Volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // o super para chamar o metodo do meu prototype
    }
}

Object.setPrototypeOf(ferrari, carro)// função q estabelece a ligação entre os filhos e seus prototypes
Object.setPrototypeOf(Volvo, carro)

console.log(ferrari)
console.log(Volvo)
Volvo.aceleraMais(120)
console.log(Volvo.status())
ferrari.aceleraMais(300)
console.log(ferrari.status())