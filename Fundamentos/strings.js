const escola = "cod3r"

console.log(escola.charAt(4))//retornar a letra "r" pelo indice
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
console.log(escola.includes("3"))//ver se faz parte da string
console.log(escola.substring(1))//escrever mas excluir algum caracter
console.log(escola.substring(0, 3))// vá do indice 0 e me diga 3 caracteres
console.log("escola " .concat(escola) .concat("!"))// pode usar +
console.log("escola " + (escola) +  ("!"))
console.log(escola.replace(3, "e"))// trocas a posição por tal caracter
console.log('Gustavo,Pedro,JOÃO'.split(","))//transforma numa array

//template string

const nome = 'Gustavo'
const concatenação = 'Olá ' + nome + "!"

console.log(concatenação)

const template = `
Olá ${nome}!`

console.log(template)

console.log(`Meu nome é ${nome}!`)

console.log(`2 + 2 = ${2 + 2}`)

const up = texto => texto.toUpperCase()// PASSANDO UMA FUNÇÃO PARA UMA CONSTANTE

console.log(`Você é muitoo ${up('BURRO')}`)// USANDO FUNÇÃO