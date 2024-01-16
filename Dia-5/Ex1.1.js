const alunos = []
const notas = []
let contador = 0
let continuarPerguntando = true 

while(continuarPerguntando) {
    let nome = prompt(`Digite o nome do ${contador + 1}º aluno`)
    let nota = parseFloat(prompt("Digite a nota do aluno"))

    alunos[contador] = nome
    notas[contador] = nota
    contador++

    let resposta = prompt("Deseja inserir informações sobre outro aluno ? (s/n)")
    if(resposta == "n") {
        continuarPerguntando = false
    }
}

console.log("Notas dos alunos: ")
for(let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] + " - " + notas[i])
}

let somaDasNotas = 0

for(let i = 0; i < notas.length; i++) {
    somaDasNotas+= notas[i]
}

let media = somaDasNotas / alunos.length
console.log(`A soma das notas foram : ${somaDasNotas.toFixed(1)}`)
console.log(`A média geral da sala foi : ${media.toFixed(1)}`)
