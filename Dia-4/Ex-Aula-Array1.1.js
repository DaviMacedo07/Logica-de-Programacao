const array = []
const indices = []
let contadorIndice = 0

const numeroProcurado = parseInt(prompt("Digite um núumero a ser procurado: "))

for( let i = 0; i < 10 ; i++){ // Supondo que o array tenha 10 elementos
    // Irei popular o array com 10 lugares (fornecidos pelo usuário)
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1} :`))
    array[i] = elemento ;
}

for (let i = 0; i < 10 ; i++) {
    if ( array[i] === numeroProcurado){
        indices[contadorIndice] = i
        contadorIndice++
    }
}

for (let i = 0; i < 10 ; i++)  {
    if(numeroProcurado != Number) {
        throw Error
    }
}

console.log(`Você procurou o numero ${numeroProcurado}`)
console.log(`O número ${numeroProcurado} foi encontrado nos índices: ${indices}
`) ;
console.log(array)