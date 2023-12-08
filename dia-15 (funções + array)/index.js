//Criar dois arrays já declarados com 10 elementos cada
//Implementar um função que retorne um terceiro array, apenas com os números que se repetem nos dois arrays anteriores
//Utilizar um método que não insira o número caso ele se repita apenas dentro do mesmo array e que não tenha números repetidos.

let arrayA = [33, 29, 19, 25, 44, 4, 19, 25, 45, 49];
let arrayB = [44, 45, 28, 4, 45, 19, 4, 33, 12, 25];

function numerosEmComum(arrayA, arrayB) {
    let arrayC = [];

    for(let i = 0; i < arrayA.length; i++) {
        for(let j = 0; j < arrayB.length; j++) {
            if(arrayA[i] == arrayB[j] && !arrayC.includes(arrayA[i])) { //arrayC.includes verifica se o número que está sendo inserido
                                                                        //já está presente dentro do arrayC. Se o número já estiver inserido
                                                                        //ele NÃO é adicionado novamente, pois foi colocado "!" antes. Isso evita um número repetido.
                                                                        //Portanto, essa condição "if" verifica se o elemento arrayA[i] é igual a arrayB[j]
                                                                        //E também se a afirmação "!arrayC.includes(arrayA[i])" é verdadeira (true).
                arrayC.push(arrayA[i]);
            }
        }
    }

    return arrayC;
}

console.log(numerosEmComum(arrayA, arrayB));



//números em comum = 4, 19, 25, 33, 45, 44