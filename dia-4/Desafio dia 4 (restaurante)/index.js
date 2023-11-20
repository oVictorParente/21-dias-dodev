const fome = prompt('Você está com fome? (s/n)')
const dinheiro = prompt('Você tem dinheiro? (s/n)')
const restaurante = prompt('O restaurante está aberto? (s/n)')

if(fome === 'n' || dinheiro == 'n'){
    console.log('Hoje a janta será em casa')
}else if(dinheiro === "s" && restaurante === "s"){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}else {
    console.log('Peça um delivery!')
}