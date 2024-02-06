//------- EXERCÍCIOS DE LOGICA DE PROGRAMAÇÃO -----------//

let fome = prompt("Você está com fome? sim // não")
let dinheiro = prompt("Você possui dinheiro? sim // não")
let restauranteAberto =  prompt("O restaurante está aberto? sim // não")

if (fome == "não" || dinheiro == "não") {
    console.log("Hoje a janta será em casa !")
} else if ( fome == "sim" && dinheiro == "sim" && restauranteAberto == "não" ) {
    console.log("Peça um delivery")
} else if (fome == "sim" && dinheiro == "sim" && restauranteAberto == "sim" ) {
    console.log("Hoje o Jantar será no seu restaurante preferido ")
}

