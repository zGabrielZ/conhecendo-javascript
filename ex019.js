const pessoa = idade =>{
    if(idade>=18){
        return `Pode entrar na auto escola, pois tem ${idade} anos`
    }
    else{
        return `Não pode entrar na auto escola, pois tem ${idade} anos`
    }
}

console.log(pessoa(22))
console.log(pessoa(18))
console.log(pessoa(12))