//Sistema simulando criação de hoteis e reservas.
//Utilizando classes e objetos, switchCase, funções, etc.

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

let idCadastroHotel = 1; //Loop para alterar o id da hotel a cada novo cadastro.
function cadastrarHotel() {

    const nome = prompt('Insira o nome do seu hotel:');
    const categoria = prompt('Insira a categoria do hotel');
    const endereço = prompt('Insira o endereço do hotel');
    const telefone = Number(prompt('Insira o telefone do hotel'));
        const novoHotel = new Hotel (idCadastroHotel, nome, categoria, endereço, telefone);

    return arrayHoteis.push(novoHotel);
}

let idCadastroReserva = 1; //Loop para alterar o id da reserva a cada novo cadastro.
function cadastrarReserva() {

        console.log("Temos esses hoteis disponíveis:");
        arrayHoteis.forEach(hotel => console.log(hotel));

    // O id do hotel deve ser um id já cadastrado. //
    let idInvalido = true;
    let idHotel = 0

while(idInvalido) {
    idHotel = Number(prompt('Insira o id do hotel escolhido'));

        for(let i = 0; i < arrayHoteis.length; i++){
            if(arrayHoteis[i].IdHotel === idHotel) {
                idInvalido = false;

                i = arrayHoteis.length
            }
        }
    }

    const nomeResponsável = prompt('Insira seu nome');

    let diaEntrada = prompt('Digite o dia de entrada no hotel');
    let diaSaída = prompt('Digite o dia de saída');

        while(diaEntrada > diaSaída) {
            alert("O dia de entrada não pode ser depois do dia de saída");

            diaEntrada = prompt('Digite o dia de entrada no hotel');
            diaSaída = prompt('Digite o dia de saída');

        }

    const novaReserva = new Reserva (idCadastroReserva, idHotel, nomeResponsável, diaEntrada, diaSaída);

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
    console.log(`////////////////////////////////`);
}


//4. Informações da reserva através do Id da reserva.
function reservasPorId(id) {

    for(let i = 0; i < arrayReservas.length; i++) {

        if(arrayReservas[i].Id == id) {
            console.log(informaçoesHotel(arrayReservas[i].IdHotel, 1));

            console.log(informaçoesHotel(arrayReservas[i].IdHotel, 3));

            console.log(`Entrada: ${arrayReservas[i].DiaEntrada}. Saída: ${arrayReservas[i].DiaSaída}`);

        }
    }
    console.log(`////////////////////////////////`);
}


//5. Função para filtar reservas através do nome do usuário
function reservasPorNome(nome) {

    for(let i = 0; i < arrayReservas.length; i++) {

        if(arrayReservas[i].NomeResponsável == nome) {
            console.log(arrayReservas[i]);
        }
    }
    console.log(`////////////////////////////////`);
}


//6. Função para filtrar hoteis de uma categoria
function hoteisPorCategoria(categoria) {

    for(let i = 0; i < arrayHoteis.length; i++) {

        if(arrayHoteis[i].Categoria == categoria) {
            console.log(arrayHoteis[i]);

        }
    }
    console.log(`////////////////////////////////`);
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
    console.log(`////////////////////////////////`);
}

function gerenciarHoteisReserva () {
    let gerenciar = prompt('Digite uma opção: \n1 = Ver todas as reservas de um hotel \n2 = Procurar reserva pelo Id \n3 = Procurar reserva pelo nome do responsável \n4 = Procurar hoteis pela categoria \n5 = Alterar telefone do hotel');

    switch(gerenciar) {
        case "1":
            let reservaHotel = Number(prompt('Digite o id do hotel'));
            reservasHotel(reservaHotel);

            break;
        case "2":
            let idReserva = prompt('Digite o id da sua reserva:');
            reservasPorId(idReserva);
            
            break;
        case "3":
            let nomeReserva = prompt('Digite o nome do responsável pela reserva');
            console.log(`Reservas cadastradas em nome de: ${nomeReserva}`);
            reservasPorNome(nomeReserva);

            break;
        case "4":
            let categoria = prompt('Digite a categoria desejada:');
            console.log(`Hoteis cadastrados na categoria: ${categoria}`);
            hoteisPorCategoria(categoria);
            
            break;
        case "5":
            let idHotel = prompt('Digite o id do hotel que deseja alterar');
            let novoTelefone = prompt('Digite o novo telefone do hotel');
            alterarTelefone(idHotel, novoTelefone);

            break;
    }
}

const hotelUm = new Hotel (123, "Grand Hyatt", "luxo", "tatuapé", 12345678);
const hotelDois = new Hotel (234, "Melia", "intermediário", "carrão", 45678903);
const hotelTres = new Hotel (963, "Ibis", "intermediário", "tatuapé", 25797543);
const reservaUm = new Reserva(456, 123, "victor", "04/12", "14/12");
const reservaDois = new Reserva(789, 852, "ana", "12/12", "25/12");
const reservaTres = new Reserva(546, 234, "victor", "01/04", "24/04");

arrayHoteis.push(hotelUm, hotelDois, hotelTres);
arrayReservas.push(reservaUm, reservaDois, reservaTres);

/////// FLUXO DE FUNCIONAMENTO ////////

let inicio = true;
while(inicio) {

    let opcoes = prompt('Olá, seja bem vindo(a) ao sistema de hotelaria DoDev.\nDigite uma opção: \n1 = Cadastrar Hotel \n2 = Fazer uma Reserva \n3 = Gerenciar Hoteis/Reservas \n4 = Encerrar programa')

        switch(opcoes) {
            case "1":
                cadastrarHotel();
                console.log('Hotel cadastrado com sucesso!');

                idCadastroHotel++;

                break;

            case "2":
                cadastrarReserva();
                console.log('Reserva realizada com sucesso!');

                idCadastroReserva++;

                break;

            case "3":
                gerenciarHoteisReserva();

                break;

            case "4":
                alert('Programa encerrado!');
                inicio = false;

                break;

            default:
                alert('Opção inválida!');
        }
}