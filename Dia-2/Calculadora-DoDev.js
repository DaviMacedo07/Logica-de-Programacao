
function Calculadora (numero1 , numero2 , operador ) {
    
    let num1 = Number(numero1)
    let num2 = Number(numero2)
    
    let resultado

    switch(operador) {
        case "1" :
        resultado = num1 + num2;
        break;

        case "2" :
        resultado = num1 - num2;
        break;

        case "3" :
        resultado = num1 * num2;
        break;

        case "4" :
        resultado = num1 / num2;
        break;

        case "5" :
        let contador = 1
        resultado = num1
        while( contador < num2 ) {
            resultado = resultado * num1 
            contador++
        }
        break;
     default: 
        resultado = "Operador inválido"
        break;
    }

        if (isNaN(resultado) || resultado > 1000000) 
            resultado = "ERRO";

    return resultado

    
}

let num1Input = prompt("Digite o primeiro número a ser calculado")
let num2Input = prompt("Digite o segundo número a ser calculado")
let operadorInput = prompt("Selecione sua operação matemática : \n1 = Soma; \n2 = Subtração; \n3 = Multiplicação; \n4 = Divisão; \n5 = Potenciação")

console.log(Calculadora(num1Input, num2Input , operadorInput))