// Criação do Sistema // 
let arr = []
let arrInvertido = []

// Populando o Array //
for(let i = 0 ; i < 5 ; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1} número`))
    arr[i] = numero
}

console.log(`Array original : ${arr}`)

 // console.log(arr.reverse())

 
// Invertendo o Array sem método //
let contador = 4

for (let i = 0 ; i < 5 ; i++) {
    arrInvertido[i] = arr[contador]
    contador--
}

console.log(`Array Invertido : ${arrInvertido}`)