let confirmação = "Não"
let salarioAtual

while (confirmação != "Sim") {
let clienteNome = prompt("Cliente, qual o seu nome?")
let idade = prompt("Cliente, qual sua idade?")
salarioAtual = parseFloat(prompt("Cliente, qual seu salário atual"))
console.log(` Nome : ${clienteNome}, Idade : ${idade}, Salário Atual: ${salarioAtual}`)
 
confirmação = prompt("As informações estão corretas? (Sim / Não)")
}

let aumentoAnual = 0.015
let salarioFuturo = salarioAtual
console.log("Previsão salarial para os próximos 10 anos: OBS : Sera um aumento de 1,5% ao ano")

for(let ano = 1; ano <= 10; ano++) {
    salarioFuturo += salarioFuturo *  aumentoAnual
    console.log(`${2023 + ano} = R$ ${salarioFuturo.toFixed(2)}`)
}

