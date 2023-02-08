const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0]  = [10, 7, 9, 8] // n1 = 10 n3 = 9 n5 já tá fora e o n6 tbm, mas foi atribuido o 0
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 9]]// ignorar o primeiro array e pegar o segundo termo do segundo
console.log(nota)
