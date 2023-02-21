class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes
        this.ano
        this.lancamentos = []
    }
    addlancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorconsolidado= 0
        this.lancamentos.forEach(l => {
            valorconsolidado += l.valor
        })
        return valorconsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -260)


const contas = new CicloFinanceiro(9, 2019)
contas.addlancamentos(salario, contaDeLuz)
console.log(contas.sumario())
