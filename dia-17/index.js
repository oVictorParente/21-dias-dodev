//Sistema simulando criação de hoteis e reservas.
//Utilizando classes e objetos, switchCase, funções, etc.

//////////////// PENDENCIAS ///////////////////////////

//Introduzir interação ao usuário, para que ele crie hoteis e reservas.
//Criar um fluxo de funcionamento do código.

///////////////////////////////////////////////////////

//Criando classe de Hotel
class Hotel {
    IdHotel
    Nome
    Categoria
    Endereço
    Telefone
    constructor(idHotel, nome, categoria, endereço, telefone) {
        this.IdHotel = idHotel;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereço = endereço;
        this.Telefone = telefone;
    }

}

//Criando classe de Reserva
class Reserva {
    Id
    IdHotel
    NomeResponsável
    DiaEntrada
    DiaSaída
    constructor(id, idHotel, nomeResponsável, diaEntrada, diaSaída) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.NomeResponsável = nomeResponsável;
        this.DiaEntrada = diaEntrada;
        this.DiaSaída = diaSaída;

    }
}


//1. Array para armazenar objetos de hoteis e reservas criados.
let arrayHoteis = [];
let arrayReservas = [];

//2. Funções para cadastrar um hotel ou reserva.
function cadastrarHotel() {

    //O id do hotel deve ser diferente de outro id já cadastrado.
    let idHotel = Number(prompt('insira o id do seu hotel'));

        for(let i = 0; i < arrayHoteis.length; i++){

                let idExistente = true
                while(idExistente) {

                if(arrayHoteis[i].IdHotel === idHotel){
                    idHotel = Number(prompt('Id já existente! Insira outro id para o seu hotel'));

                } else {
                    idExistente = false;

                }
            }
    }

    const nome = prompt('Insira o nome do seu hotel:');
    const categoria = prompt('Insira a categoria do hotel');
    const endereço = prompt('Insira o endereço do hotel');
    const telefone = Number(prompt('Insira o telefone do hotel'));
        const novoHotel = new Hotel (idHotel, nome, categoria, endereço, telefone);

    return arrayHoteis.push(novoHotel);
}

function cadastrarReserva() {
    let id = 1
    // Introduzir loop para aumentar o id a cada novo cadastro. //

        console.log("Temos esses hoteis disponíveis:");
        arrayHoteis.forEach(hotel => console.log(hotel));

    // O id do hotel deve ser um id já cadastrado. //
    let idHotel = Number(prompt('insira o id do hotel escolhido'));

    const nomeResponsável = prompt('Insira seu nome');

    let diaEntrada = prompt('Digite o dia de entrada no hotel');
    let diaSaída = prompt('Digite o dia de saída');

        while(diaEntrada > diaSaída) {
            alert("O dia de entrada não pode ser depois do dia de saída");

            diaEntrada = prompt('Digite o dia de entrada no hotel');
            diaSaída = prompt('Digite o dia de saída');

        }

    let novaReserva = new Reserva (id, idHotel, nomeResponsável, diaEntrada, diaSaída);

    return arrayReservas.push(novaReserva);

}


//Função para localizar as informações do hotel através do Id
function informaçoesHotel(idHotel, opcoes) {

    for(let i = 0; i < arrayHoteis.length; i++){
        if(arrayHoteis[i].IdHotel == idHotel){
    
            switch(opcoes) {
                case 1: 
                    return arrayHoteis[i].Nome;

                case 2: 
                    return arrayHoteis[i].Categoria;

                case 3:
                    return arrayHoteis[i].Endereço;

                case 4: 
                    return arrayHoteis[i].Telefone;
            }
        }
    }
}


//3. Função para filtrar as reservas por Id
function reservasHotel(idHotel) {

    for(let i = 0; i < arrayReservas.length; i++){

        if(arrayReservas[i].IdHotel === idHotel) {

            console.log(arrayReservas[i]);
            console.log(`Nome do hotel: ${informaçoesHotel(idHotel, 1)}`);
            console.log(`Nome do responsável: ${arrayReservas[i].NomeResponsável}`);
            console.log(`Entrada: ${arrayReservas[i].DiaEntrada}. Saída: ${arrayReservas[i].DiaSaída}`);
        }
    }
}


//4. Informações da reserva através do Id da reserva.
function reservasPorId(id) {

    for(let i = 0; i < arrayHoteis.length; i++) {

        if(arrayReservas[i].Id == id) {
            console.log(informaçoesHotel(arrayReservas[i].IdHotel, 1));

            console.log(informaçoesHotel(arrayReservas[i].IdHotel, 3));

            console.log(`Entrada: ${arrayReservas[i].DiaEntrada}. Saída: ${arrayReservas[i].DiaSaída}`);
        }
    }
}


//5. Função para filtar reservas através do nome do usuário
function reservasPorNome(nome) {

    for(let i = 0; i < arrayReservas.length; i++) {

        if(arrayReservas[i].NomeResponsável == nome) {
            console.log(arrayReservas[i]);
        }
    }
}


//6. Função para filtrar hoteis de uma categoria
function hoteisPorCategoria(categoria) {

    for(let i = 0; i < arrayHoteis.length; i++) {

        if(arrayHoteis[i].Categoria == categoria) {
            console.log(arrayHoteis[i]);
        }
    }
}


//7. Função para alterar o telefone de um hotel, localizado pelo id
function alterarTelefone(idHotel, novoTelefone) {

    for(let i = 0; i < arrayHoteis.length; i++){

        if(arrayHoteis[i].IdHotel == idHotel) {

            let hotelEncontrado = arrayHoteis[i].Nome;
            arrayHoteis[i].Telefone = novoTelefone;

            console.log(`Telefone do hotel ${hotelEncontrado} alterado para ${novoTelefone}`);
        }
    }
}




let reservaUm = new Reserva(456, 123, "victor", "04/12", "14/12");
let reservaDois = new Reserva(789, 852, "ana", "12/12", "25/12");
let reservaTres = new Reserva(546, 234, "victor", "01/04", "24/04");

let hotelUm = new Hotel (123, "Mercury", "luxo", "tatuapé", 12345678);
let hotelDois = new Hotel (234, "Melia", "luxo", "carrão", 45678903);
let hotelTres = new Hotel (963, "Ibis", "basico", "tatuapé", 25797543);



arrayHoteis.push(hotelUm, hotelDois, hotelTres);
arrayReservas.push(reservaUm, reservaDois, reservaTres);

/////// FLUXO DE FUNCIONAMENTO ////////

let inicio = true
while(inicio) {

    let opcoes = prompt('Olá, seja bem vindo(a) ao sistema de hotelaria DoDev.\nDigite uma opção: \n1 = Cadastrar Hotel \n2 = Fazer uma Reserva \n3 = Gerenciar Hoteis/Reservas \n4 = Encerrar programa')

        switch(opcoes) {
            case "1":
                cadastrarHotel();
                alert('Hotel cadastrado com sucesso!');

                break;

            case "2":
                cadastrarReserva();
                alert('Reserva realizada com sucesso!');

                break;

            case "3":
                let gerenciar = prompt('Digite uma opção: \n1 = Procurar reserva pelo Id \n2 = Procurar reserva pelo nome do responsável \n3 = Procurar hoteis pela categoria \n4 = Alterar telefone do hotel');

                    switch(gerenciar) {
                        case "1":
                            //ERRO//
                            let idReserva = prompt('Digite o id da sua reserva:');
                            reservasPorId(idReserva);
                            
                            break;

                        case "2":
                            let nomeReserva = prompt('Digite o nome do responsável pela reserva');
                            console.log(`Reservas cadastradas em nome de: ${nomeReserva}`);
                            reservasPorNome(nomeReserva);

                            continue;

                        case "3":
                            let categoria = prompt('Digite a categoria desejada:');
                            console.log(`Hoteis cadastrados na categoria: ${categoria}`);
                            hoteisPorCategoria(categoria);
                            
                            continue;

                        case "4":
                            let idHotel = prompt('Digite o id do hotel que deseja alterar');
                            let novoTelefone = prompt('Digite o novo telefone do hotel');
                            alterarTelefone(idHotel, novoTelefone);

                            continue;
                    }

            case "4":
                alert('Programa encerrado!');
                inicio = false;

                break;

            default:
                alert('Opção inválida!');
        }
}