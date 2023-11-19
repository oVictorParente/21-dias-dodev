let nome = prompt('Olá, seja bem vindo! Para começarmos, por favor insira seu nome:');
let idade = parseInt(prompt('Agora, sua idade:'));
    let nascimento = 2023 - idade
let altura = prompt('Agora sua altura (somente números, em cm):');
    let alturaEmMetros = altura / 100
let peso = parseInt(prompt('Seu peso (somente números, em kg)'));
    let imc = peso / (alturaEmMetros * alturaEmMetros)
    imc = imc.toFixed(2)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + nascimento + ", você mede " + alturaEmMetros + "m, você pesa " + peso + "Kg, seu IMC é de " + imc + "Kg/m2");