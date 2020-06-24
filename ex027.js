let onibus = {
    rodas:8,
    limitePassageiro:40,
    portas:2
}

function imprimir(){
    for(let i in onibus){
        console.log(onibus[i])
    }
}

imprimir()

onibus.janela = 20

delete onibus.rodas

console.log('----------------------')

imprimir()