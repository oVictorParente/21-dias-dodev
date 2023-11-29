let listaCarros = [];
let listaAnos = [];
let listaValores = [];
let adicionarCarros = true;

while(adicionarCarros) {
    nome = prompt('Qual o nome do veículo ?');
    ano = parseInt(prompt('Qual o ano do veículo ?'));
    valor = Number(prompt('Qual o valor do veículo ?'));
        listaCarros.push(nome);
        listaAnos.push(ano);
        listaValores.push(valor);

        adicionarCarros = prompt('Deseja adicionar mais um veículo ?\n1 = sim \n2 = não') === "1";
        if(!adicionarCarros) {
            alert('Parece que você não deseja adicionar outro veículo. \nVamos às listas!');
        }
}   

console.log('Você inseriu os seguintes veículos, nessa ordem:');
for(let i = 0; i < listaCarros.length; i++) {
    console.log(`${listaCarros[i]}, ${listaAnos[i]}, Valor: R$${listaValores[i]}`);
}

//Criando uma única lista para representar cada veículo (nome, ano e valor)
let listaOrdenada = [];
for (let i = 0; i < listaCarros.length; i++) {
    let carro = {
        nome: listaCarros[i],
        ano: listaAnos[i],
        valor: listaValores[i],
    };
    listaOrdenada.push(carro);
}
//Ordenando a lista pelo valor (do menor para o maior)
listaOrdenada.sort((a, b) => a.valor - b.valor);
    console.log('Exibindo lista, ordenada pelo valor (do menor para o maior)')
    for (let i = 0; i < listaOrdenada.length; i++) {
        console.log(`${listaOrdenada[i].nome}, ${listaOrdenada[i].ano}. Valor: R$${listaOrdenada[i].valor}`);
    }