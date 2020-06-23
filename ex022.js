const textos = txt =>{
    if(txt.length>10){
        return 'Texto muito longo'
    }
    else{
        return 'Texto dentro do limite'
    }
}

console.log(textos('12345678910'))
console.log(textos('123456789101iogJWD´POdj'))
console.log(textos('1234xovD'))
console.log(textos('OIOIOIO'))