//Dar ao usuário 4 opções: Cadastro, Login, Excluir cadastro e Finalizar o programa.
//O usuário pode fazer quantos cadastros quiser e após efetuar um login com um dos nomes e senhas que criou.
//Após o login, ele pode excluir um dos cadastros, cadastrar mais nomes e finalizar o programa (quando quiser).

let listaNomes = [];
let listaSenhas = [];
let opcoes = true;

while(opcoes) {
let inicio = prompt('Olá, seja bem vindo(a) à Comunidade DoDev! O que você deseja fazer ?\n1 = Cadastro \n2 = Login \n3 = Excluir um cadastro \n4 = Encerrar o programa')
    switch(inicio) {
        case "1":
        let nome = prompt('Insira seu nome');
        let senha = prompt('Insira sua senha');
            listaNomes.push(nome);
            listaSenhas.push(senha);
        break;

        case "2":
            let loginNome = prompt('Insira seu nome para login');
            let loginSenha = prompt('Insira sua senha');
            let loginEncontrado = false

                for(let i = 0; i < listaNomes.length; i++) {  
                    if(loginNome === listaNomes[i] && loginSenha === listaSenhas[i]) {
                        loginEncontrado = true;
                    }
                }
                    if(loginEncontrado) {
                        alert('Login realizado com sucesso!');
                    } else { 
                        alert('Usuário e/ou senha incorretos.');
                        opcoes = false; 
                    }
        break;

        case "3":
            opcoes = false;
            break;
            
        case "4":
            alert('Programa finalizado!');
            opcoes = false;
            break;

        default: 
            alert('Opção inválida, escolha uma válida')
    }
} 
console.log(listaNomes)
console.log(listaSenhas)