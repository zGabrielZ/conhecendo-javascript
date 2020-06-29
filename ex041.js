let validarEnderecoIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/ 

console.log(validarEnderecoIp.test('127.0.0.1'))
console.log(validarEnderecoIp.test('198.168.0.1'))
console.log(validarEnderecoIp.test('8.8.8.8'))
