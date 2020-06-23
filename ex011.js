const usuario = {
    idade:19,
    cnh:true
}

if(usuario.idade>18 && usuario.cnh==true){
    console.log('Pode dirigir')
}
else if(usuario.idade>18 && usuario.cnh == false){
    console.log('É maior, porém não tem cnh, não pode dirigir')
}
else{
    console.log('Não pode dirigir')
}