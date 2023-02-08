class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissão = 'Professor'){
        super(sobrenome)
        this.profissão = profissão
    }
}

class filho extends pai {
    constructor(){
        super('Silva')
    }
}

const f = new filho
console.log(f)