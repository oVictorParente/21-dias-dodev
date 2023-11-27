//Usuário escolhe um número e eu crio um Array fibonacci de 10 elementos.
let arrayFibonacci = []
const numero = parseInt(prompt('Insira um número'))
arrayFibonacci[0] = (numero - 1)
arrayFibonacci[1] = numero

//i = posição do array. Ele começa com 2, pois já foram determinados os 2 primeiros elementos.

for(i = 2; i < 10; i++) {
    arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2]

} console.log(`Fibonacci: ${arrayFibonacci}`)