//Receber 5 números, exibí-los em um array e depois exibí-los ao contrário.
let arrayNumeros = []
let arrayInvertido = []

for(let posiçãoArray = 0; posiçãoArray < 5; posiçãoArray++) {
    let numero = parseInt(prompt('Insira 5 números. \nInsira o ' + (posiçãoArray + 1) + 'º número:'))
    arrayNumeros[posiçãoArray] = numero
}       console.log(`Array original: ${arrayNumeros}`)

let contador = 4
for(let posiçãoArray = 0; posiçãoArray < 5; posiçãoArray++) {
    arrayInvertido[posiçãoArray] = arrayNumeros[contador]
contador--
}       console.log(`Array invertido: ${arrayInvertido}`)