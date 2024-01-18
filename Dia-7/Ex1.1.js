class myPc {
    Tipo 
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.MemoriaRam = memoriaRam
        this.Armazenamento = armazenamento
        this.Ssd = ssd 
    }

    ExibirInformacoes() {
        console.log("Informaçõoes do Computador: ")
        console.log(`Tipo : ${this.Tipo}`)
        console.log(`Processador : ${this.Processador}`)
        console.log(`Vídeo : ${this.Video}`)
        console.log(`Armazenamento : ${this.Armazenamento}`)
        console.log(`Memória-Ram : ${this.MemoriaRam}`)
        console.log(`SSD : ${this.Ssd}`)
    }
}

const meuComputador = new myPc ("Desktop", "Intel 3 - 10900", "Integrado", "1TB", "8Gb", "250Gb")

meuComputador.ExibirInformacoes()
