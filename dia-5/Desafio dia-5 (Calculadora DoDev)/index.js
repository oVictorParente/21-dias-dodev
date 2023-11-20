let num1 = Number(parseInt(prompt('Escolha um número aleatório:')))
let num2 = Number(parseInt(prompt('Escolha mais um número')))
let operação = prompt('Qual operação você deseja fazer? (+; -; /; *)')

switch(operação) {
    case "+" :
        console.log('Você realizou a operação de adição. ' + num1 + ' + ' + num2 + ' = ' + (num1 + num2))
        break;
    case "-" :
        console.log('Você realizou a operação de subtração. ' + num1 + ' - ' + num2 + ' = ' + (num1 - num2))
        break;
    case "/" :
        console.log('Você realizou a operação de divisão. ' + num1 + ' / ' + num2 + ' = ' + (num1 / num2))
        break;
    case "*" :
        console.log('Você realizou a operação de multiplicação. ' + num1 + ' * ' + num2 + ' = ' + (num1 * num2))
        break;
    default:
        console.log('Operação inválida, tente novamente com (+; -; /; *)')
}