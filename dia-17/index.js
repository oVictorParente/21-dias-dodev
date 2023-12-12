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

    for(let i = 0; i < arrayReservas.length; i++) {

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
            arrayHoteis[i].Telefone = novoTelefone;
        }
    }
}




let reservaUm = new Reserva(456, 123, "victor", "04/12", "14/12");
let reservaDois = new Reserva(789, 234, "ana", "12/12", "25/12");
let reservaTres = new Reserva(546, 234, "victor", "01/04", "24/04");

let hotelUm = new Hotel (123, "Mercury", "luxo", "tatuapé", 12345678);
let hotelDois = new Hotel (234, "Melia", "luxo", "carrão", 45678903);
let hotelTres = new Hotel (963, "Ibis", "basico", "tatuapé", 25797543);



arrayHoteis.push(hotelUm, hotelDois, hotelTres);
arrayReservas.push(reservaUm, reservaDois, reservaTres);