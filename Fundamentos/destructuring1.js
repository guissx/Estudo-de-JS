

const pessoa = {
    nome: "Ana",
    idade: 45,
    endereço: {
        rua: "av7",
        numero: 313421
    }
}

const { nome, idade } = pessoa // estraindo do objeto informações para variaveis
console.log(nome, idade)

const { nome: i, idade: j } = pessoa

console.log(i, j)

const { sobrenome, inteligente = true} = pessoa

console.log(sobrenome, inteligente)

const { endereço: {
    rua, numero, cep  
}} = pessoa

console.log(rua, numero, cep)