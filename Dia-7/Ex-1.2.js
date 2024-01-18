class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor (nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome 
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    TempoMedio(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}


class Corrida {
    Nome 
    Tipo 
    Distancia 
    Participantes
    Vencedor 
    constructor (nome, tipo, distancia, participantes, vencedor) {
        this.Nome = nome 
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""
            
   }

   VerificaVencedor(){
    let menorTempo = this.Participantes[0].TempoMedio(this.Distancia)
    let vencedor = this.Participantes[0]

    for (let index = 1; index < this.Participantes.length; index++) {
        let tempo = this.Participantes[index].TempoMedio(this.Distancia)
        if (tempo < menorTempo) {
            menorTempo = tempo
            vencedor = this.Participantes[index]
        }
    }

    return this.Vencedor = vencedor

   }

   ExibirVencedor(){
    alert(`O grande vencedor é : ${this.Vencedor.Nome}`)
   }

}

let corrida = new Corrida("Monza", "Fórmula 1", 60000)

corrida.Participantes[0] = new Carro ("Ferrari", 797 ,315, 3.4)
corrida.Participantes[1] = new Carro ("Bugatti", 1.200, 490,3.2)
corrida.Participantes[2] = new Carro ("McLaren", 1.050,386, 2.9)

corrida.VerificaVencedor()
corrida.ExibirVencedor()
