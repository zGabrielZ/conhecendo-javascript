const array1 = [1,2,3,4,5]
const array2 = [2,3,4,5]

const verificarNumero = (vet) =>{
    return vet.length<5?'Poucos elementos':'Muitos elementos'
}

console.log(verificarNumero(array1))
console.log(verificarNumero(array2))