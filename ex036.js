class Carro {
    constructor(marca,cor,gasolina){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }

    dirigir(){
        for(this.gasolina;this.gasolina>=0;this.gasolina--){
            console.log(this.gasolina)
        }
    }

    abastecer(gasolina){
        this.gasolina +=gasolina
    }

}

const fiat = new Carro('Fiat','Branco',5)
fiat.dirigir()
fiat.abastecer(8)
fiat.dirigir()