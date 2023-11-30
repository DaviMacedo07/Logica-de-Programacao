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

function calcularDetalhadametne() {

const diasPorAno = 365 * idade
const diasPorMeses = 30 * idade
const diasPorSemana = 7 * idade

return {
    ano : diasPorAno ,
    meses : diasPorMeses ,
    semana: diasPorSemana   
}

}
console.log(calcularDetalhadametne()) 
 


if(imc < 18.5) {
    console.log("Seu imc é classificado como : Magreza")
} else if (imc >= 18.5 && imc <= 24.9 ) {
    console.log("Seu imc é classificado como : Normal")
} else if (imc >= 25 && imc <= 30 ) {
    console.log("Seu imc é classificado como : Sobrepeso")
} else {
    console.log("Seu imc é classificado como : Obeso")
}
