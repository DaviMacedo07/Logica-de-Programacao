
let arr = []
let arrInvertido = []
let qtdNumeros = parseInt(prompt("Digite a quantidade de números que deseja inserir"))

for(let i = 0 ; i < qtdNumeros ; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1} número`))
    arr[i] = numero
}

console.log(`Array original : ${arr}`) 

let contador = qtdNumeros - 1

for (let i = 0 ; i < qtdNumeros ; i++) {
    arrInvertido[i] = arr[contador]
    contador--
}

console.log(`Array Invertido : ${arrInvertido}`)