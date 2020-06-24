const pessoa = {
    "nome":"Gabriel",
    "nascimento":"26/12/1997",
    "nacionalidade":"Brasil"
}

let jsonParaString = JSON.stringify(pessoa)
console.log(jsonParaString)
let stringParaJson = JSON.parse(jsonParaString)
console.log(stringParaJson)