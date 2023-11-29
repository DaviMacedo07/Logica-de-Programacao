let nome = (prompt("Qual seu nome?"))
let idade = parseInt(prompt("Qual sua idade?"))
let peso = parseFloat(prompt("Qual seu peso em Kg?"))
let altura = Number(prompt("QUal sua altura?"))
let profissao = (prompt("Qual sua profissão")) ;


console.log(` Olá ${nome}, você tem ${idade}, é ${profissao} , tem ${altura}M e pesa ${peso}Kg`)

if (idade >= 18) {
    console.log("Esta liberado para tomar umas geladas")
} else {
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