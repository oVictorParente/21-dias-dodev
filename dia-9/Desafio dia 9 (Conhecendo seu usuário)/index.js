let dados = true
    while(dados) {
let nome = prompt('Insira seu nome:')
let idade = Number(prompt('Insira sua idade:'))
    let nascimento = (2023 - idade)
let peso = parseInt(prompt('Insira seu peso: (em kg)'))
let altura = Number(prompt('Insira sua altura: (em cm)'))
    let alturaEmMetros = altura * 0.01
    let imc = peso / (alturaEmMetros * alturaEmMetros)
    imc = imc.toFixed(2)
let profissão = prompt('Qual sua profissão ?')
    
console.log('Olá ' + nome + ', você tem ' + idade + ' anos, é ' + profissão + ', tem ' + alturaEmMetros + 'M de altura e pesa ' + peso + 'kg')

    if(idade < 18){
        console.log('Sem geladas para você')
    } else {
        console.log('Está liberado para tomar umas geladas!') }

let idadeEmMeses = (12 * idade)
    console.log("Em meses você viveu, aproximadamente: " + idadeEmMeses + " meses.")
let idadeEmSemanas = (52 * idade)
    console.log("Em semanas você viveu, aproximadamente: " + idadeEmSemanas + " semanas.")
let idadeEmDias = (365 * idade)
    console.log("Em dias você viveu, aproximadamente: " + idadeEmDias + " dias.")

    if (imc <= 18.5) {
        console.log('Seu IMC é de: ' + imc + '. Sua faixa de IMC é considerada "Magreza, quando o resultado é menor que 18.5 kg/m2"')
    } else if (imc > 18.5 && imc <= 24.9) { 
        console.log('Seu IMC é de: ' + imc + '. Sua faixa de IMC é considerada "Normal, quando o resultado está entre 18.5 e 24.9 kg/m2"')
    } else if (imc > 24.9 && imc <= 30) { 
        console.log('Seu IMC é de: ' + imc + '. Sua faixa de IMC é considerada "Sobrepeso, quando o resultado está entre 24.9 e 30 kg/m2"')
    } else if (imc > 30) { 
        console.log('Seu IMC é de: ' + imc + '. Sua faixa de IMC é considerada "Obesidade, quando o resultado é maior que 30 kg/m2"') }

    //APESAR DE NÃO SER TÃO RECOMENDADO NESSE CASO, VOCÊ TAMBÉM PODE USAR A ESTRUTURA switchCase, COMO NESSE EXEMPLO ABAIXO:
    //switch(true) {
    //    case imc <= 18.5:
    //        console.log('Sua faixa de IMC é considerada "Magreza, quando o resultado é menor que 18.5 kg/m2"')
    //        break;
    //    case imc > 18.5 && imc <= 24.9:
    //        console.log('Sua faixa de IMC é considerada "Normal, quando o resultado está entre 18.5 e 24.9 kg/m2"')
    //        break;
    //    case imc > 24.9 && imc <= 30:
    //        console.log('Sua faixa de IMC é considerada "Sobrepeso, quando o resultado está entre 24.9 e 30 kg/m2"')
    //        break;
    //    case imc > 30:
    //        console.log('Sua faixa de IMC é considerada "Obesidade, quando o resultado é maior que 30 kg/m2"')
    //        break;
    // }

    console.log('Você nasceu em: ' + nascimento)
    for(i = 0; nascimento <= 2023; i++, nascimento++) {
        console.log(nascimento + ": " + i + " anos de idade")
    }

    let inserirNovosDados = prompt('Deseja inserir novos dados? \n1 = sim \n2 = não')
    while (inserirNovosDados !== "1" && inserirNovosDados !== "2") {
        alert('Opção inválida')
        inserirNovosDados = prompt('Deseja inserir novos dados? \n1 = sim \n2 = não')
    }
        if(inserirNovosDados === "1") {
            dados = true
        } else if(inserirNovosDados === "2") {
            dados = false
        }
        }