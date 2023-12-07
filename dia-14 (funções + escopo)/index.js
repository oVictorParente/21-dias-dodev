//Criar uma função que pergunte o nome e salário do usuário
//Essa função retornará uma função que varia de acordo com o valor inserido pelo usuário
//Dada o nome de "aumentoSalarial()"

function colaborador(){
    nome = prompt('Insira o nome do colaborador');
    salario = Number(prompt('Insira o salário do colaborador'));

    return aumentoSalarial();
}

function aumentoSalarial() {   
    if(salario <= 1500) {
        let novoSalario = (salario * 1.20)
        console.log(`Olá ${nome}, seu salário era R$${salario}. Você teve um aumento de 20%. Portanto, seu salário agora é de R$${novoSalario.toFixed(2)}`)
    }
    else if(salario <= 2000) {
        novoSalario = (salario * 1.15)
        console.log(`Olá ${nome}, seu salário era R$${salario}. Você teve um aumento de 15%. Portanto, seu salário agora é de R$${novoSalario.toFixed(2)}`)
    }
    else if(salario <= 3000) {
        novoSalario = (salario * 1.10)
        console.log(`Olá ${nome}, seu salário era R$${salario}. Você teve um aumento de 10%. Portanto, seu salário agora é de R$${novoSalario.toFixed(2)}`) 
    }
    else if(salario > 3000) {
        novoSalario = (salario * 1.05)
        console.log(`Olá ${nome}, seu salário era R$${salario}. Você teve um aumento de 5%. Portanto, seu salário agora é de R$${novoSalario.toFixed(2)}`)
    }
    
    return continuar()
}

//A função de aumentoSalarial() irá retornar uma outra função que pergunta ao usuário se ele deseja inserir novos valores
//Caso ele digite "1", essa função retornará a primeira função do código. 
//Qualquer coisa diferente de "1" encerrará o programa.

function continuar() {
    let novasInformaçoes = prompt('Digite 1 se deseja inserir novas informações')
    if(novasInformaçoes == "1") {

        return colaborador();
    } else {
        console.log("Programa encerrado!")
    }
}