//par nome/valor
const saudação = 'Opa' //contexto léxico 1

function exec(){
    const saudação = 'Falaaa' // contexto 2
    return saudação
}


//objetos são um grupo aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 19,
    peso: 70,
    altura: 1.74,
    endereço: {
        logradouro: 'Rua resenha',
        numero: 453
    }
}

console.log(saudação)
console.log(exec())
console.log(Cliente)