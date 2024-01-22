var nomeColab
var salarioColab

function perguntarColab() {
    nomeColab = prompt("Qual o seu nome?")
    salarioColab = parseFloat(prompt("Digite o seu salario, " + nomeColab))
    calcSalario(nomeColab, salarioColab)
}

function calcSalario(nomeColab , salarioColab) {
    var aumento = 0

    if (salarioColab <= 1500) {
        aumento = 0.2
    } else if (salarioColab <= 2000) {
        aumento = 0.15
    } else if (salarioColab <= 3000) {
        aumento = 0.1
    } else {
        aumento = 0.05
    }

    var novoSalario = salarioColab + (salarioColab * aumento)

    console.log(`Nome do Colaborador: ${nomeColab}`)
    console.log(`Salário: R$${salarioColab}`)
    console.log(`Aumento: ` + (aumento*100) + "%")
    console.log(`Salário reajustado: R$${novoSalario}`)

    perguntarNovamente()  
}
perguntarColab()
function perguntarNovamente() {
    var resposta = prompt("Deseja calcular novamente? (s/n)")

    if (resposta == "s") {
        perguntarColab()
    } else {
        console.log(`Programa encerrrado.`)
    }
}
