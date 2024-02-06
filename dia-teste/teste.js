let nome 
let cpf 
 nome = String(prompt("Digite seu nome: "));
 cpf =  Number(prompt("Digite seu CPF: "));
let saldo= 500
let maiorValorInserido = 0
let totalTransações = 0
let somaValoresInseridos = 0
let continuar = false

do {
    const valor = Number(prompt("Digite o valor da transação"))
    const operacao = parseInt(prompt("Qual é a operação desejada: " + "\n1 = Saque ; \n2 = Depósito"))

    if (valor < 0 ) {
        throw Error
    } else if ( operacao === 1 && valor > saldo) {
        console.log("Saldo insuficiente. Transação não realizada.")
    } else if (operacao === 1) {
        console.log(`Olá, ${nome} CPF : ${cpf}, seu saldo é R$${saldo}`)
        saldo -= valor
        totalTransações++
        somaValoresInseridos += valor
        if (valor  > maiorValorInserido) {
            maiorValorInserido = valor
        }
    }   
    console.log(`Transação realizada com sucesso. Seu saldo atual é de R$${saldo}`)
    
} while (continuar === true)