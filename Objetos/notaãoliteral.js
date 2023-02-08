const a = 1
const b = 1
const c = 1

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b , c}// igual
console.log(obj1, obj2)




const nomea = 'NOTA'
const valora = 9.5
const obj3 = {}

obj3[nomea] = valora

console.log(obj3)

const obj4 = {[nomea]: valora} //igual

console.log(obj4)


const obj5 = {
    func1: function(){
        //antigo
    },
    func2() {
        //novo
    }
}