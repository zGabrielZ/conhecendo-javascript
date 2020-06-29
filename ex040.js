let regex = /Marca : (Nike|Adidas|Puma|Asics)/

console.log(regex.test('Marca : Nike'))
console.log(regex.test('Marca : Neymar'))
console.log(regex.test('Marca : Puma'))
console.log(regex.test('Marca : Adidas'))