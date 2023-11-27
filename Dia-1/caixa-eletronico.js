window.alert("Saldo inicial para todos ! 500R$")

let saldo = 500;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransações = 0;
let continuar = false;
let nome 
let cpf 
 nome = String(prompt("Digite seu nome:"));
 cpf =  Number(prompt("Digite seu cpf:"));
do {
    
    const valor = Number(prompt("Digite o valor da transação:"));
    const operacao = parseInt(prompt("Qual é a operação que deseja fazer:" +
        "\n1 = Saque ; \n2 = Depósito"));

    if (valor < 0) {
        console.log("Valor inválido. A transação não foi realizada.");
    } else if (operacao === 1 && valor > saldo) {
        console.log("Saldo insuficiente. Transação não realizada.");
    } else if (operacao === 1) {
        console.log(`Olá, ${nome} (${cpf}), seu saldo é R$${saldo}`);
        saldo -= valor;
        totalTransações++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    } else {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransações++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo é R$${saldo}`);
    }

    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar)");
    if (opcao === "1") {
        continuar = true;
    } else if (opcao === "2") {
        continuar = false;
    } else {
        console.log("Operação inválida. Programa encerrado.");
        continuar = false;
    }

} while (continuar);

console.log(`Saldo final: R$${saldo}`);
console.log(`O maior valor inserido foi: R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransações)}`);
