let arrayFibonacci = [] 
let numero = parseInt(prompt("Digite um número inteire e positivo qualquer!"))
arrayFibonacci[0] = numero - 1
arrayFibonacci[1] = numero

for (let i = 2; i < 10; i++) {
    arrayFibonacci[i] = arrayFibonacci[ i - 1] + arrayFibonacci [ i - 2]
}

console.log(`Fibonacci : ${arrayFibonacci}`)