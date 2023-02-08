function area(altura, largura){
    const area = largura * altura
    if(area > 10){
        console.log(`VALOR ACIMA DO PERMITIDO : ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2, 5))
console.log(area(10,))
console.log(area())
console.log(area(2, 5, 10, 30))
