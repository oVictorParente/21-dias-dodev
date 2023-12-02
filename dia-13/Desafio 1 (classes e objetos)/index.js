//Criando uma classe para especificar o computador do usuário.

class Computador {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRAM
    SSD
    constructor(tipo, processador, video, armazenamento, memoriaRAM, SSD) {
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemoriaRAM = memoriaRAM
        this.SSD = SSD
    }
    meuComputador() {
        console.log(`Tipo: ${this.Tipo}`)
        console.log(`Processador: ${this.Processador}`)
        console.log(`Video: ${this.Video}`)
        console.log(`Armazenamento: ${this.Armazenamento}`)
        console.log(`MemóriaRAM: ${this.MemoriaRAM}`)
        console.log(`SSD: ${this.SSD}`)
    }
}

const tipo = prompt('Seu computador é Desktop ou Notebook ?');
const processador = prompt(`Qual o processador do seu ${tipo}?`)
const video = prompt('Seu video é: \nIntegrado ou Dedicado')
const armazenamento = prompt(`Qual o armazenamento do seu ${tipo}?`)
const memoriaRAM = prompt('Quanto de MemóriaRAM ?')
const ssd = prompt('Quanto de SSD ?')

    const computadorVictor = new Computador(tipo, processador, video, armazenamento, memoriaRAM, ssd)

console.log(computadorVictor)
console.log(computadorVictor.meuComputador())