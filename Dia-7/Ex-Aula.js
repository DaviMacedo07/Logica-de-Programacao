class Aluno {
    nome
    idade
    areaAtuacao
    constructor(nome , idade) {
        this.nome = nome 
        this.idade = idade
    }
}



console.log("============= Cadastro de Alunos =============")
let alunos = []
let continuar = true 
let indexDeAluno = 0


    while(continuar) {
        let nome = prompt("insira o nome do aluno!")
        let idade = prompt("Insira a idade do aluno!")
        let aluno = new Aluno( nome, idade)

        let areaAtuacao = prompt("Insira a area de atuação do   aluno!")
        aluno.areaAtuacao = areaAtuacao

        alunos[indexDeAluno] = aluno;
        let desejaContinuar = prompt("Deseja continuar ? insira 1   para  sim")
        if (desejaContinuar != 1) {
            continuar = false
        } else {
            indexDeAluno++
        }


}