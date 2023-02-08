const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() //respeita a variavel pelo escopo de bloco, tem essa memoria
funcs[9]()