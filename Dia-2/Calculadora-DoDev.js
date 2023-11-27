function Calculadora (numero1 , numero2 , operador) {
    let resultado
    let num1 = Number(numero1)
    let num2 = Number(numero2)
    num1 = Number(prompt("DIgite um numero"))
    num2 = Number(prompt("DIgite outro numero"))
    window.prompt("Selecione sua operação matemática :" + "\n1 = Soma ; \n2 = Subtração ; \n3 = Multiplicação ; \n4 = Divisão")  

    switch(operador) {
        case "1" :
        resultado = num1 + num2;
        break;

        case "2" :
        resultado = num1 - num2;
        break;

        case "3" :
        resultado = num1 / num2;
        break;

        case "4" :
        resultado = num1 * num2;
        break;

        case "5" :
        let contador = 1
        resultado = num1 * num2
        while( contador < num2 - num1) {
            resultado = resultado * num1 
            contador++
        }
        break;
    }

        if (resultado == undefined || resultado > 1000000) 
            resultado = "ERRO"

    return resultado
}

console.log(Calculadora())
