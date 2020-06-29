let soTerminadaComID = /\d+\id|ID\b/

console.log(soTerminadaComID.test('aaaaa'))
console.log(soTerminadaComID.test('12233aaaaa'))
console.log(soTerminadaComID.test('aaaaa1111'))
console.log(soTerminadaComID.test('123'))
console.log(soTerminadaComID.test('AAAABBBB'))
console.log(soTerminadaComID.test('CCCJJJJ'))
console.log(soTerminadaComID.test('ccccAAAA1111AAAA'))
console.log(soTerminadaComID.test('4444id'))
console.log(soTerminadaComID.test('999ID'))
console.log(soTerminadaComID.test('aaaaaid'))