class Aluno {
    Nome
    Idade
    Nota
    constructor(nome, idade , nota) {
        this.Nome = nome
        this.Idade = idade
        this.Nota = nota    
    }
}

let arrayAlunos = []

function solicitaOpcoes() {
    let opcao = prompt("O que você deseja fazer no programa?\n1. Cadastrar\n2. Ordenar por Nota\n3. Ordenar por Idade\n4. Ordenar por Nome\n5. Calcular Média\n6. Encerrar")
    return opcao
}

function CadastrarAlunos (nome, idade, nota, array) {
    let objetoAluno = new Aluno (nome, idade, nota)
    if(!array.some(x => x.Nome == nome)) {
        array.push(objetoAluno)
        return objetoAluno
    }
    return false
}

function OrdenarPorNota(array) {
    array.sort((a, b) => a.Nota -b.Nota)
    return array
}

function OrdenarPorIdade(array) {
    array.sort((a, b) => b.Idade -a.Idade)
    return array
}

function OrdenarPorNome(array) {
    array.sort((a, b) => {
        const nomeA = a.Nome.toUpperCase()
        const nomeB = b.Nome.toUpperCase()

        if (nomeA < nomeB) {
            return -1
        }
        if (nomeA > nomeB) {
            return 1
        }
        return 0;
    });
    return array
}

function CalcularMedia(array) {
    if(array.length === 0) {
        return 0
    }
    let somaNotas = 0

    array.forEach((aluno) => {
        somaNotas += Number(aluno.Nota)
    });

    const media = somaNotas / array.length
    return media 
}

let continuar = true 


while (continuar) {
    let opcao = solicitaOpcoes();

    switch (opcao) {
        case "1":
            let nomeCadastro = prompt("Digite o nome do aluno: ");
            let idadeCadastro = prompt("Digite a idade do aluno: ");
            let notaCadastro = prompt("Digite a nota do aluno: ");
            
            // Convertendo para número as entradas de idade e nota
            idadeCadastro = parseInt(idadeCadastro);
            notaCadastro = parseFloat(notaCadastro);

            if (CadastrarAlunos(nomeCadastro, idadeCadastro, notaCadastro, arrayAlunos)) {
                console.log("Cadastro feito com sucesso!");
            } else {
                console.log("Aluno já cadastrado. Tente novamente.");
            } 
            break;

        case "2":
            arrayAlunos = OrdenarPorNota(arrayAlunos);
            console.log("Alunos ordenados por nota:", arrayAlunos);
            break;

        case "3":
            arrayAlunos = OrdenarPorIdade(arrayAlunos);
            console.log("Alunos ordenados por idade:", arrayAlunos);
            break;

        case "4":
            arrayAlunos = OrdenarPorNome(arrayAlunos);
            console.log("Alunos ordenados por nome:", arrayAlunos);
            break;

        case "5":
            let media = CalcularMedia(arrayAlunos);
            console.log("Média das notas dos alunos:", media);
            break;

        case "6":
            continuar = false;
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}