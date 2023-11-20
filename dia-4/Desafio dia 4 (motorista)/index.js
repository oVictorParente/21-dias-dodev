let nome = prompt('Digite seu nome:')
let idade = parseInt(prompt('Digite sua idade:'))
let temCarta = false
let temCarro = false

let opcaoCarta = prompt('Você possui carteira de motorista? (s/n)')
if(opcaoCarta == "s"){
    temCarta = true
}
let opcaoCarro = prompt('Você possui carro? (s/n)')
if(opcaoCarro == "s"){
    temCarro = true
}

if(idade < 18 || !temCarta) {
    console.log(nome + ", você não pode dirigir")
}else if(idade >= 18 && temCarta && !temCarro){
    console.log(nome + ", você pode dirigir mas não tem um carro")
}else {
    console.log(nome + ", você será o motorista!")
}