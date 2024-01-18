let nomes = []
let senhas = []
let contador = 0

let continuar = true 

while(continuar) {
    let pergunta = prompt("O que deseja fazer ? 1 - Cadastro / 2 - Login / 3 - Excluir / 4 - Encerrar")

    switch(pergunta) {

        case "1" :
            nomes[contador] = prompt("Qual o seu nome?")
            senhas[contador] = prompt("Qual a senha")
            contador++

            break;


        case "2" : 
            let nome = prompt("Qual o seu nome?")
            let senha = prompt("Qual a senha?")
            let loginInvalid = false

            for (let i = 0; i < nomes.length; i++){
                if (nome == nomes[i] && senha == senhas [i]) {
                    loginInvalid = true
                }
            }

            if (loginInvalid) {
                alert("Login feito com sucesso. Bem-Vindo!")
            } else {
                alert("Login ou Senha incorretos ")
            }
            break;


        case "3" :
            let nomeExcluir = prompt("Qual o nome deseja excluir?")
            let senhaExcluir = prompt("Qual a senha para a verificação")

            let nomesAux = []
            let senhasAux = [] 
            let contadorAux = 0
            let encontrado = false;

            for (let i = 0; i < contador ; i++) {
                if (nomeExcluir == nomes[i] && senhaExcluir == senhas[i]) {
                    alert("Cadastro excluído com sucesso!")
                    encontrado = true;
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }
            if (!encontrado) {
                alert("Nome não encontrado. Nenhum cadastro foi excluído.");
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--

            break;

            case "4" :
            continuar = false
            break;
            default:
               alert("Opcão invalida, escolha outra")
               break;
    }
}