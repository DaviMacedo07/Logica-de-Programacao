const modelos = []
const anos = [] 
const valores = []
let contador= 0
let continuar = true

while (continuar) {
    let modelo = prompt(`Digite o modelo do carro`)
    modelos[contador] = modelo
    let ano = prompt("Digite o ano do veículo")
    anos[contador] = ano
    let valor = prompt("Digite o valor do veículo")
    valores[contador] = valor

    contador++

    let resposta = prompt("Deseja inserir outro carro? (s/n)")
    if (resposta == "n") {
        continuar = false
    }
}

console.log("Carros Cadastrados: ")
for(let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])

}


for(let i = 0 ; i < valores.length - 1; i++) {
    for(let j = 0 ; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j + 1]) {
            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor


            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor


            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor         
      }
    }
}

console.log("Carros Ordenmados pelo preço : ")

for(let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}