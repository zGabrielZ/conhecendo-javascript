let comida = ['Maça','Melancia']
let pessoa = ['João','Marcos','Júlia','Maria'] 

comida.forEach((chave,index) => console.log(`${index} : ${chave}`))
console.log('-------------------------------------------')
pessoa.forEach((chave,index) => console.log(`${index} : ${chave}`))

console.log('-------------------------------------------')
let vet = comida.concat(pessoa)
vet.forEach((chave,index) => console.log(`${index} : ${chave}`))

// imprimir o tamanho da listas 
console.log('-------------------------------------------')
console.log(comida.length)
console.log(pessoa.length)
console.log(vet.length)