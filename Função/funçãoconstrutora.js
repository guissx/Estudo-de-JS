function Carro(velocidademax = 200, delta = 5) {
    //atributo privado
    let velocidadeatual = 0
    //metodo publico
    this.acelerar = function () {
        if(velocidadeatual + delta <= velocidademax){
            velocidadeatual += delta
        }else{
            velocidadeatual = velocidademax
        }
    }
}
//publico
this.Velocidadeatual = function() {
    return velocidadeatual
}

const up = new Carro
up.acelerar()
console.log(up.Velocidadeatual())


const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.Velocidadeatual())

//função como classe