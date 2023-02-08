function aula(nome, video) {
    this.nome = nome
    this.video = video
}

const aula1 = new aula('Boas vindas', 123)

const aula2 = new aula('Introdução', 321)

console.log(aula1, aula2)

//simular o operador new
function novo(f, ...params) {
    const obj = {} //criar um obj novo com notação literal
    obj.__proto__ = f.prototype // associar o prototipo do obj com o atributo prototype da função
    f.apply(obj, params)//executar a função f, passando o obj de contexto que seria o this e passando os parametros que vc recebeu pelo metodo new
    return obj
}

const aula3 = novo(aula, 'CONFUSO INICIALMENTE', 777) // A FUNÇÃO SIMULANDO O new e os parametros
 

console.log(aula3)