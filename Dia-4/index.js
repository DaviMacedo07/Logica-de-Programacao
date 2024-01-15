let nomes = []
let posicaoDoArray = 0
let continuar = true

while(continuar === true) {
    let nomesInseridos = prompt("Insira um nome")
    nomes[posicaoDoArray] = nomesInseridos

    let desejaContinuar = prompt("Deseja continuar ? Digite 1 para sim") 
    if(desejaContinuar != "1"){
        continuar = false
        continue;
    }
    posicaoDoArray++;
    console.log(nomes)
}