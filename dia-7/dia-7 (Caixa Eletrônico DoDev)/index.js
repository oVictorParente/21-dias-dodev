    let nome = prompt('Insira seu nome')
    let cpf = prompt("Insira seu CPF")  
    let operação = true
    saldoTotal = 1000
    transações = 1
    saldo = 0
    valor = 1
    valoresInseridos = 0
    maiorValorInserido = 0
    alert('Você tem, disponível para uso, em sua conta: R$' + saldoTotal)

while(operação) {
    valor = Number(prompt('Qual valor deseja operar:'))
    while(valor <= 0) {
        alert('Insira um valor válido')
        valor = Number(prompt('Qual valor deseja operar:'))
    }
    let saqueOuDeposito = prompt('Você deseja realizar: \n1 = saque \n2 = depósito')
    while(saqueOuDeposito !== "1" && saqueOuDeposito !== "2"){
        alert('Opção inválida') 
        saqueOuDeposito = prompt('Você deseja realizar: \n1 = saque \n2 = depósito')}
    if(saqueOuDeposito === "1") {
        while(valor > saldoTotal) {
            alert('Você não tem saldo suficiente. Insira outro valor!')
            valor = Number(prompt('Qual valor deseja operar:'))
        }
        if(valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        saldo = saldoTotal - valor
        console.log('Esta é sua ' + transações + 'ª operação. Você sacou: R$' + valor + '. Agora seu saldo é de: R$' + saldo)
        saldoTotal -= valor;
    } else if (saqueOuDeposito === "2") {
        if(valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        saldo = saldoTotal + valor
        console.log('Esta é sua ' + transações + 'ª operação. Você depositou: R$' + valor + '. Agora seu saldo é de: R$' + saldo)
        saldoTotal += valor;
    }
    let repetir = prompt('Deseja realizar outra operação ? \n1 = sim \n2 = não')
    while(repetir !== "1" && repetir !== "2"){
        alert('Opção inválida')
        repetir = prompt('Deseja realizar outra operação ? \n1 = sim \n2 = não') 
    }
        if(repetir === "1") {
        operação = true
        transações++ 
        valoresInseridos += valor
        
        } else if(repetir === "2"){
            operação = false
            valoresInseridos += valor
        }
}   console.log(nome + "(" + cpf + ")" + " Você realizou " + transações + " operação(ões). Seu saldo final é de: R$" + saldo)
    console.log("O maior valor movimentado foi de: R$" + maiorValorInserido)
    console.log("A média de valor inserido em cada transação foi de: R$" + (valoresInseridos / transações))