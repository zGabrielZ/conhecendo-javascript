let soLetraMaiuscula = /[A-Z]/

console.log(soLetraMaiuscula.test('aaaaa'))
console.log(soLetraMaiuscula.test('12233aaaaa'))
console.log(soLetraMaiuscula.test('aaaaa1111'))
console.log(soLetraMaiuscula.test('123'))
console.log(soLetraMaiuscula.test('AAAABBBB'))
console.log(soLetraMaiuscula.test('CCCJJJJ'))
console.log(soLetraMaiuscula.test('ccccAAAA1111AAAA'))