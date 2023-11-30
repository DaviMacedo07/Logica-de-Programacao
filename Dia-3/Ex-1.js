let nome = prompt("Qual seu nome?")
let idade = parseInt(prompt("Qual sua idade?"))
let peso = prompt("Qual seu peso em Kg? Use .")
let altura = prompt("Qual sua altura? Use .")
let profissao = prompt("Qual sua profissão") ;
let imc = peso / (altura * altura)

console.log(` Olá ${nome}, você tem ${idade}, é ${profissao} , tem ${altura}M e pesa ${peso}Kg`)

    if (idade >= 18) {
    console.log("Esta liberado para tomar umas geladas")
 }  else {
 console.log("Sem gelada para você")
}

let meses = idade * 12;
let semanas = idade * 7
let dias = idade * 365

console.log(`Sua idade em meses é : ${meses} `)
console.log(`Sua idade em semanas é : ${semanas} `)
console.log(`Sua idade em dias é : ${dias} `)

if(imc < 18.5) {
    console.log("Seu imc é classificado como : Magreza")
} else if (imc >= 18.5 && imc <= 24.9 ) {
    console.log("Seu imc é classificado como : Normal")
} else if (imc >= 25 && imc <= 30 ) {
    console.log("Seu imc é classificado como : Sobrepeso")
} else {
    console.log("Seu imc é classificado como : Obeso")
}

let anoAtual= 2023
let anoNasc = anoAtual - idade
console.log(`${nome} , você nasceu em ${anoNasc}`)

let anoVivido = anoNasc
let idadeAtual = 0

for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(`${anoVivido} - ${idadeAtual} anos de idade`)
    idadeAtual++
}