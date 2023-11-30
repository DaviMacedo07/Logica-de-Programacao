let nomes = []
let continuar = true
let positionDoArray = 0;

while(continuar) {
    let nomeInserido = prompt("Insira um nome")
    nomes[positionDoArray] = nomeInserido

    let desejaContinuar = prompt("Insira 1 caso deseje continuar")
    if(desejaContinuar != 1) {
        continuar = false
        continue
    }

    positionDoArray++
}