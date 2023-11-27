//Usuário escolhe 1 número. Depois 10 números, incluindo o número escolhido.
//O algoritmo irá informar em que posição da lista está localizado o número escolhido.
let arrayNumeros = []
let indices = []
let contadorIndices = 0

const numeroEscolhido = parseInt(prompt('Escolha um número:'))
    alert('Insira 10 números. \nDentre os 10 insira, ao menos uma vez, o número escolhido anteriormente.')

    //i = posição do array
for(let i = 0; i < 10; i++){
    let numero = parseInt(prompt('Insira o ' + (i + 1) + 'º número:' ))
    arrayNumeros[i] = numero

} 

for(let i = 0; i < 10; i++) {
    if(arrayNumeros[i] === numeroEscolhido){
        indices[contadorIndices] = i
        contadorIndices++
    }
}

console.log(`O número: ${numeroEscolhido}, está localizado no(s) elemento(s) (${indices})`)