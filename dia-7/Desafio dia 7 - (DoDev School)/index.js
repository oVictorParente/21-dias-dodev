//CRIAR UM ALGORITMO QUE RECEBA NOME, SEXO E AS NOTAS DOS ALUNOS (QUANTOS QUISEREM CADASTRAR NOTAS)
//AO FINAL, MOSTRAR A MÉDIA GERAL, QUANTOS HOMENS ENVIARAM NOTAS, QUANTAS MULHERES TIRARAM +7 E A MAIOR NOTA ENTRE OS HOMENS

maiorNotaHomens = 0
notaMulheresAcima7 = 0
cadastro = true
numeroDeHomens = 0
notaTotal = 0
numeroAlunos = 0

while(cadastro) {
    let nome = prompt('Insira seu nome')
    let sexo = prompt('Insira seu sexo: \n1 = masculino \n2 = feminino')
        while (sexo !== "1" && sexo !== "2") {
            alert('opção invalida')
            sexo = prompt('Insira seu sexo: \n1 = masculino \n2 = feminino')
        }
        if(sexo === "1") {
            numeroDeHomens++ }
    let nota = Number(prompt('Cadastre sua nota (0 a 10):'))
        while(nota < 0 || nota > 10) {
            alert('Não é possível cadastrar notas negativas ou maiores que 10')
            nota = Number(prompt('Cadastre sua nota (0 a 10):'))
        }
        if(sexo === "1" && nota > maiorNotaHomens) {
                maiorNotaHomens = nota
        } else if(sexo === "2" && nota > 7) {
            notaMulheresAcima7++
        }
    let cadastrarNota = prompt('Deseja cadastrar outra nota ? \n1 = sim \n2 = não')
        if(cadastrarNota === "1") {
            cadastro = true
        } else if(cadastrarNota === "2") {
            cadastro = false }
     numeroAlunos++
     notaTotal += nota
}
console.log('A média geral é de: ' + (notaTotal / numeroAlunos))
console.log(numeroDeHomens + " homens enviaram as notas")
console.log(notaMulheresAcima7 + " mulheres tiveram notas acima de 7")
console.log('a maior nota dos homens é: ' + maiorNotaHomens)