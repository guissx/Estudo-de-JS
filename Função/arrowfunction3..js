let compara = function (param) {
    console.log(this === param)
}

compara(global)
compara(this)// this nn é o this kkkkkkkkkk, aponta pro global

const obj = {}

compara = compara.bind(obj)
compara(global)
compara(obj)

let comparaarrow = param => console.log(this === param) // arrow trabalha com o arquivo em que está sendo trabalhado, já uma função normal global
comparaarrow(global)
comparaarrow(module.exports)
comparaarrow(this)

comparaarrow = comparaarrow.bind(obj)
comparaarrow(global)
comparaarrow(obj)// arrow function mantem apontando pro obj original