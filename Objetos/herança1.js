const ferrari = {
    modelo: "F40",
    velMax: 324
}

const Volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.__proto__)// acessar o prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(Volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObj(){}

console.log(typeof Object, typeof MeuObj);


console.log(Object.prototype, MeuObj.prototype);

//reutizar caracteristicas