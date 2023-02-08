function tratarerro(erro) {
    //throw new Error('VC FEZ ALGO ERRADO')
    //throw 10
    //throw true
    throw {
        nome: Error.name,
        idade: Error.idade
    }
}

function imprimir(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!!")
    } catch(e){
        tratarerro(e)
    } finally {
        console.log("ACABOU")
    }
}

const obj = {name: 'Roberta'}// name nome
imprimir(obj)