let arrayA = [12, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [12, 10, 20, 18, 27, 17, 13, 14 ,13];

function commonNumbers(arrayUm, arrayDois) {
    let resultado = [];
    let contadorResultado = 0;

    for (let i = 0; i < arrayUm.length; i++) {
        for (let j = 0; j < arrayDois.length; j++) {
            if (arrayUm[i] == arrayDois[j]) {
                resultado[contadorResultado] = arrayUm[i];
                contadorResultado++;
                break; 
            }
        }
    }

    return resultado;
}

console.log(commonNumbers(arrayA, arrayB));