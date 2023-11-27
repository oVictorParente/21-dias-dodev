//Perguntar ao usuário quantos números ele deseja inserir na lista. Inserí-los em um Array, exibir esse Array e depois exibí-lo ao contrário.
let quantidadeDeNumeros = Number(prompt('Quantos números deseja inserir em sua lista?'))
let arrayNumeros = []
let arrayInvertido = []

for(let posiçãoDoArray = 0; posiçãoDoArray < quantidadeDeNumeros; posiçãoDoArray++) {
    let numero = parseInt(prompt('Insira o ' + (posiçãoDoArray + 1) + 'º número:'))
    arrayNumeros[posiçãoDoArray] = numero

}       console.log(`Array original: ${arrayNumeros}`)

let contador = (quantidadeDeNumeros - 1)
for(let posiçãoDoArray = 0; posiçãoDoArray < quantidadeDeNumeros; posiçãoDoArray++) {
    arrayInvertido[posiçãoDoArray] = arrayNumeros[contador]
        contador--

}   console.log(`Array invertido: ${arrayInvertido}`)