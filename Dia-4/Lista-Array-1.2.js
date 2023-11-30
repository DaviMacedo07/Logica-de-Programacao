///////// -- Exercício1.2 -- ///////////////

let array = []
let arrayInvertido = []

for (let i = 0 ; i < 10 ; i++) {
    let numero = parseInt(prompt(`Digite o ${(i + 1)} numero`))
    array[i] = numero
}

console.log(`Array original : ${array}`)


let contador = 9

for (let i = 0 ; i < 10 ; i++) {
    arrayInvertido[i] = array[contador]
    contador --
}

console.log(`Array invertido : ${arrayInvertido}`)