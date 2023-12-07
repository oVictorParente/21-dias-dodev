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

function continuar() {
    let novasInformaçoes = prompt('Digite 1 se deseja inserir novas informações')
    if(novasInformaçoes == "1") {

        return colaborador();
    } else {
        console.log("Programa encerrado!")
    }
}