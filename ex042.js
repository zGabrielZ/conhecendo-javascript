let validarNome = /^(?=.{3,16}[a-z0-9-_])/

console.log(validarNome.test('gabriel133'))
console.log(validarNome.test('aaaaaaaaaaaaaaaaaaa'))
console.log(validarNome.test('a1'))