let nomes = []
let senhas = []

function solicitaOpcoes() {
    let opcao = prompt("O que você deseja fazer no programa?" + "\n1. Cadastrar; \n2. Login; \n3. Excluir um Cadastro; \n4 Encerrar")
    return opcao
}

function cadastraUsuario() {
    nomes.push(prompt("Digite seu nome: "))
    senhas.push(prompt("Digite sua senha: "))
}

function fazerLogin(nome, senha) {
    let indice = nomes.indexOf(nome)
    if(indice !== -1 && senhas[indice] == senha) {
        return(true)
    } else {
        return(false)
    }
}


function excluirCadastro (nome) {
    let indice = nomes.indexOf(nome)
    if (indice !== -1) {
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Cadastro excluído com sucesso!")
    } else {
        console.log("Usuário não encontrado")
    }
}



let continuar = true 

while(continuar) {
    let opcao = solicitaOpcoes()

    switch(opcao) {
        case "1":
            cadastraUsuario()
            break;

        case "2":
            let nomeLogin = prompt("Digite seu nome: ")
            let senha = prompt("Digite sua senha: ")
            let login = fazerLogin(nomeLogin, senha);
            if (login) {
                console.log("Login feito com sucesso!")
            } else {
                console.log("Nome ou senhas incorretos!")
            }
            break;
        
        case "3":
            let nomeExcluir = prompt("Digite o nome a ser excluído")
            let senhaExcluir = prompt("E a senha para verificação")
            excluirCadastro(nomeExcluir)
            excluirCadastro(senhaExcluir)
            break;
        
        case "4":
            continuar = false
            break;
        
        default:
            console.log("Opção inválida. Tente Novamente")
            break;
    }
}
