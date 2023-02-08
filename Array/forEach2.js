
Array.prototype.forEach2 = function (callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}// forEach na mão



const aprovados = ['joao', 'pedro', 'jessica', 'ariana']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome} `)
}) 