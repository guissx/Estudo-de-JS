class Lançamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes
        this.ano
        this.lançamentos = []
    }
    addlançamentos(...lançamentos) {
        lançamentos.forEach(l => this.lançamentos.push(l))
    }

    sumario() {
        let valorconsolidado= 0
        this.lançamentos.forEach(l => {
            valorconsolidado += l.valor
        })
        return valorconsolidado
    }
}

const salario = new Lançamento('Salario', 4500)
const contaDeLuz = new Lançamento('Luz', -260)


const contas = new CicloFinanceiro(9, 2019)
contas.addlançamentos(salario, contaDeLuz)
console.log(contas.sumario())
