//Dar ao usuário 4 opções: Cadastro, Login, Excluir cadastro e Finalizar o programa.
//O usuário pode fazer quantos cadastros quiser e após efetuar um login com um dos nomes e senhas que criou.
//Após o login, ele pode excluir um dos cadastros, cadastrar mais nomes e finalizar o programa (quando quiser).

let listaNomes = [];
let listaSenhas = [];
let opcoes = true;

while(opcoes) {
let inicio = prompt('Olá, seja bem vindo(a) à Comunidade DoDev. O que você deseja fazer ? \n1 = cadastro \n2 = login \n3 = excluir um cadastro \n4 = encerrar um programa');
 
    switch(inicio) {
        case "1":
    const nome = prompt('Insira seu nome para cadastro');
    const senha = prompt('Insira sua senha para cadastro');
        listaNomes.push(nome);
        listaSenhas.push(senha);
        break;

        case "2":
    const loginNome = prompt('Insira seu nome para login:');
    const loginSenha = prompt('Insira sua senha para login:');
    let usuarioEncontrado = false;

        for(let i = 0; i < listaNomes.length; i++) {
            if(loginNome === listaNomes[i] && loginSenha === listaSenhas[i]) {
                usuarioEncontrado = true;
            }
        } //Aqui deve ser parado o FOR, o loop é realizado por completo. 
          //Durante o FOR, se as condições forem validadas, o usuárioEncontrado passa a ser "true"
          //Após o FOR, ai sim ele entra nos alerts para passar a informação ao usuário.

            if(usuarioEncontrado) {
                alert('Login realizado com sucesso!');
            }     

            if(!usuarioEncontrado) {
                alert('Usuário não encontrado!');
            }

        break;

        case "3":
            const excluirCadastro = prompt('Insira o nome de usuário que deseja excluir:');

            const nomeExcluido = listaNomes.indexOf(excluirCadastro); //".indexOf" => Procurar um índice na "listaNomes" que contenha a string "excluirCadastro"
                                                                   //O ".indexOf" sempre retorna "-1" caso não encontre o elemento escrito dentro dos parênteses "()". Caso encontre, ele me retorna o número da posição que está o elemento "excluirCadastro".
                                                                   //O retorno da função indexOf() eu armazeno na variável "nomeExcluido".

            //Portanto, se a variável "nomeExcluido" me retornar "-1", significa que não foi encontrado nenhum elemento com o nome guardado na variável "excluirCadastro"
            if(nomeExcluido === -1) {
                alert('Usuário não encontrado. Programa encerrado!');
                opcoes = false;
            }

            if(nomeExcluido !== -1) {
                listaNomes.splice(nomeExcluido, 1); //O número após a vírgula "," para informar ao algoritmo quantos elementos eu desejo remover da array, após o elemento armazenado na variável "nomeExcluido". 
                listaSenhas.splice(nomeExcluido, 1); //Se não for colocado nenhum número, o algoritmo remove, do elemento encontrado em diante.
                
                alert(`Usuário "${excluirCadastro}" excluído com sucesso!`);
            }   
        break;

        case "4":
            alert('Você escolheu a opção 4. Programa encerrado!');
            opcoes = false;
            break;

        default:
            alert('Opção inválida!');
    }
}

console.log(listaNomes);
console.log(listaSenhas);