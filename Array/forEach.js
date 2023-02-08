const aprovados = ['joao', 'pedro', 'jessica', 'ariana']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome} `)
}) 

aprovados.forEach(nome => console.log(nome))

const exibir = (nome, indice) => {
    console.log(`${indice + 1} ${nome} `)
}

aprovados.forEach(exibir) // a função foreach passa o nome, o indice e o array todo

