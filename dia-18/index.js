//Criar um sistema de biblioteca e empréstimo de livros. Utilizando classes e objetos.

//Criando classe Livro
class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, anoPublicacao) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoPublicacao = anoPublicacao;
    }
}

//Criando classe Bliblioteca
class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoDeLivros = []
    constructor(nome, endereco, telefone, acervoDeLivros) {
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.AcervoDeLivros = acervoDeLivros;
    }
    

    //Método que verifica o nome do livro e exibe todas suas informações
    buscarLivro(nomeLivro) {
        for(let i = 0; i < this.AcervoDeLivros.length; i++) {
            if(nomeLivro === this.AcervoDeLivros[i].Titulo) {
    
            return this.AcervoDeLivros[i];
            }
        }
    }


    //Método para empréstimo do livro. Verifica se o livro está disponível e após o torna indisponível, simulando que foi emprestado.
    emprestimoLivro(nomeLivro) {
        for(let i = 0; i < this.AcervoDeLivros.length; i++) {

            if(nomeLivro === this.AcervoDeLivros[i].Titulo) {

                if(arrayLivros[i].Disponibilidade === true) {
                    arrayLivros[i].Disponibilidade = false;

                    return true;
                }
            }
        }

        return false;
    }

    //Método para devolução do livro. Verifica se o livro existe e após o torna disponível novamente.
    devolucaoLivro(nomeLivro) {
        for(let i = 0; i < this.AcervoDeLivros.length; i++) {
            
            if(nomeLivro === this.AcervoDeLivros[i].Titulo) {
                this.AcervoDeLivros[i].Disponibilidade = true;

                return console.log(`O livro "${nomeLivro}" está disponível novamente`);
            }
        }
    }
}

//Criando array para adicionar os objetos da classe Livro.
let arrayLivros = [];

//Objetos da classe Livro
let livroUm = new Livro ("Os segredos da mente milionária", "Tim Harv Eker", "Sextante", 2005);
let livroDois = new Livro ("O milagre da manhã", "Hal Elrod", "Best Seller", 2016);
let livroTres = new Livro ("Pai rico, Pai pobre", "Robert Kiyosaki", "Alta Books", 1997);

arrayLivros.push(livroUm, livroDois, livroTres);


let biblioteca = new Biblioteca ("Livraria DoDev", "São Paulo", 23456789, arrayLivros);