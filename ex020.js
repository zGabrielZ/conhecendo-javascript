const tipos = function(texto){
    return typeof texto
}

let vet = [1,2,3]

const usuario = {
    nome:'José',
    idade:22,
    endereco:{
        end1:'Rua coronel',
        end2:'Rua jamais nunca vi'
    }
}

console.log(tipos(5))
console.log(tipos('Gabriel'))
console.log(tipos(true))
console.log(tipos(vet))
console.log(tipos(usuario))
