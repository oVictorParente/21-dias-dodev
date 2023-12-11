//Criando uma classe Carro
class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome;
        this.Potencia = potencia;
        this.VelocidadeMaxima = velocidadeMaxima;
        this.Aceleracao = aceleracao;
    }

    //Criando um método para cálcular quanto tempo um objeto da classe levará para percorrer a distância contida no parâmetro
    calculoDistancia(distancia) {
        let tempo = distancia / (this.VelocidadeMaxima / this.Aceleracao);
        return tempo;
    }
}

//Criando uma classe corrida
class Corrida {
    Nome
    Tipo
    Distancia
    Participantes //Os participantes serão os objetos criados da classe Carro.
    Vencedor
    constructor(nome, tipo, distancia, participantes) {
    this.Nome = nome;
    this.Tipo = tipo;
    this.Distancia = distancia;
    this.Participantes = participantes;
    }

    //Criando um método que verificará qual participante completará a corrida em menor tempo
    menorTempo(distancia) {
        let tempoVencedor = Infinity;
        let vencedor = null;
        
        for (let i = 0; i < this.Participantes.length; i++) {
            let tempo = this.Participantes[i].calculoDistancia(distancia);

                if (tempo < tempoVencedor) {
                    tempoVencedor = tempo;
                    vencedor = this.Participantes[i].Nome;
                }

            }
            this.Vencedor = vencedor;

            //Essa função retornará uma mensagem dizendo quem foi o vencedor da corrida
            return console.log(`O vencedor da corrida em ${corrida.Nome} foi o carro ${vencedor}`);
        }
}

//Criando os objetos da classe Carro que serão adicionados aos participantes da classe Corrida

//Poderia ter eu mesmo atribuido alguns objetos para simplificar o código
//Porém, para deixar mais interativo, deixo para o próprio usuário inserir os carros que ele mesmo quiser.
let continuar = true;
let contador = 0;
let arrayParticipantes = [];

while(continuar) {
const carro = prompt('Qual o nome do carro ?');
const potencia = parseInt(prompt('Qual a potencia do carro ?'));
const velocidadeMaxima = parseInt(prompt('Qual a velocidade máxima do carro'));
const aceleracao = parseFloat(prompt('0-100km/h em quantos segundos'));
    const participante = new Carro (carro, potencia, velocidadeMaxima, aceleracao);

    arrayParticipantes.push(participante);

    let pergunta = prompt('Digite 1 para inserir mais um carro');
    if(pergunta != "1") {
        continuar = false;
    } 
    contador++;

    alert(contador + ' Carro(s) adicionado(s)');
}

//Exibindo os carros criados pelo usuário
console.log("Você adicionou os seguintes carros:")
for(let i = 0; i < arrayParticipantes.length; i++) {
    console.log(arrayParticipantes[i])
}

//Criando um objeto da classe Corrida
const corrida = new Corrida ("Interlagos", "Carros Aleatórios", 60000, arrayParticipantes);

//Exibindo resultados
console.log(`A corrida foi realizada em ${corrida.Nome}, com extensão total de ${(corrida.Distancia / 1000)}km`);

corrida.menorTempo(corrida.Distancia);