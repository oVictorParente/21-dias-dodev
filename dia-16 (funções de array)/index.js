let arrayNomes = [];
let arraySenhas = [];

opcoes();

//Criar uma função que solicite ao usuário escolher uma opção
function opcoes() {
    let opcoes = prompt('O que deseja realizar: \n1 = Cadastro \n2 = Login \n3 = Excluir um cadastro \n4 = Encerrar programa');
       switch(opcoes) {
        case "1":
            return cadastro();

        case "2":
            return login();

        case "3":
            return excluir();

        case "4":
            alert('Programa encerrado!');
            break;
        
        default:
            alert('Opção inválida. Programa encerrado!');
            break;
       } 

}

//Criar uma função para que o usuário cadastre um nome e uma senha
function cadastro() {
        const nome = prompt('Insira seu nome para cadastro');
        const senha = prompt('Insira sua senha para cadastro');
            arrayNomes.push(nome);
            arraySenhas.push(senha);

    return opcoes();
}

//Criar uma função que peça ao usuário um nome e senha que já estão cadastrados nos arrays de nomes e senhas.
function login() {
        const loginNome = prompt('Insira seu nome para login');
        const loginSenha = prompt('Insira sua senha para login');

        if(arrayNomes.includes(loginNome) && arraySenhas.includes(loginSenha)) {
            alert('Login realizado com sucesso!');
        } else {
            alert('Usuário e/ou senha incorretos');
        }

    return opcoes();
}

//Criar uma função que solicite ao usuário um nome já cadastro.
//Excluir o nome cadastrado do arrayNomes e a senha respectiva desse nome em arraySenhas.
function excluir() {
    alert('Vamos excluir um usuário');
        const excluirNome = prompt('Digite o nome a ser excluido');
           const usuarioExcluido = arrayNomes.indexOf(excluirNome)
            arrayNomes.splice(usuarioExcluido, 1);
            arraySenhas.splice(usuarioExcluido, 1);

           if(usuarioExcluido != "-1") {
            alert(`Usuário ${excluirNome} excluído com sucesso!`);
           } else {
            alert(`Não encontramos um usuário com o nome de ${excluirNome}`);
           }

    return opcoes();
}