//Receber as informações do usuário (nome, idade e salário). Todas informações precisam ser confirmadas pelo usuário.
//Caso alguma informação esteja errada, deverá preencher todas informações novamente.
//Calcular o salário dos próximos 10 anos do usuário, baseando-se que no primeiro ano o aumento é de 1,5% e dobrando o percentual a cada ano seguinte.

confirmar = true

while(confirmar) {
let nome = prompt('Insira seu nome:')
let idade = Number(prompt('Insira sua idade:'))
let salario = parseFloat(prompt('Insira seu salário atual:'))
    alert('Seu nome é ' + nome + '. Sua idade é ' + idade + ' anos. Se salário é de R$' + salario)
    
confirmar = prompt('Suas informações estão corretas ? \n1 = sim \n2 = não')
    if(confirmar === "1") {
    confirmar = false
        console.log('Você receberá um aumento de 1.5% esse ano. E sabe-se que a cada ano, esse percentual dobra. Portanto essa é a previsão do seu salário nos próximos 10 anos:')

    let percentualAumento = 0.015

    for(let ano = 1; ano <= 10; ano++) {
        salario += (salario * percentualAumento)
        percentualAumento *= 2

            console.log('No ' + ano + 'º ano. Seu salário será de: R$' + salario.toFixed(2))           
        }

    } else if (confirmar === "2") {
           confirmar = true
    }
}