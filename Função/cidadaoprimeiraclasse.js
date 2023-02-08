//criar de forma literal

function fun1() {

}

//armazenar numa variavel


const funt2 = function () {}

//array

const array = [function (a, b) { return a + b}, fun1(), funt2()]
console.log(array[0](2, 5))

// obj

const obj = {}

obj.falar = function () {
    return "Opa"
}
console.log(obj.falar())

// função como parametro

function run(fun) {
    fun()
}
run(function () {
    console.log("Executando")
})

//função pode retornar outra função ou conter ela tbm

function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(1,1)(1) // ou
const somai = soma(1,1)
somai(1)
