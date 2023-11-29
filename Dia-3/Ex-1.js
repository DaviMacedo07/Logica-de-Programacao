let nome = toString(prompt("Qual seu nome?"))
let idade = parseInt(prompt("Qual sua idade?"))
let peso = parseFloat(prompt("Qual seu peso em Kg?"))
let altura = Number(prompt("QUal sua altura?"))
let profissao = toString(prompt("Qual sua profissão"))

console.log(` Olá ${nome}, você tem ${idade}, é ${profissao} , tem ${altura}M e pesa ${peso}Kg`)

if (idade >= 18) {
    console.log("Esta liberado para tomar umas geladas")
} else {
    console.log("Sem gelada para você")
}