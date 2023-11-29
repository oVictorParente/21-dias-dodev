//Criar duas listas (arrays) para receber o nome e nota de alunos (quantos o usuário quiser inserir). 

let arrayAlunos = [];
let arrayNotas = [];
let adicionarAlunos = true;
let somaNotas = 0;
let somaAlunos = 0;

while (adicionarAlunos) {
    let aluno = prompt('Qual o nome do aluno?');
    let nota = Number(prompt('Qual foi sua nota na prova?'));
        arrayAlunos.push(aluno);
        arrayNotas.push(nota);
    
adicionarAlunos = prompt('Deseja adicionar outro aluno? \n1 = sim \n2 = não') == "1";
    if(adicionarAlunos != "1") {
        alert('Parece que você não deseja adicionar mais alunos. Programa Encerrado!');
        adicionarAlunos = false;
    }
    somaNotas += nota
    somaAlunos++
}
    //Exibir a nota de cada aluno, separadamente.
    console.log('Listagem de Alunos e Notas:');
    for (let i = 0; i < arrayAlunos.length; i++) {
        console.log(`Aluno: ${arrayAlunos[i]}, Nota: ${arrayNotas[i]}`);
    }
    console.log(`A soma total das notas é de: ${somaNotas}`);
    console.log(`A média geral foi de: ${(somaNotas / somaAlunos).toFixed(2)}`);