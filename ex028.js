let nomes = ['Gabriel','José','Marcos','Maria','Joana','Anna']

let resultado = ()=>{
    nomes.forEach(nomes=>{
        console.log(nomes.includes('Gabriel')?'Tem':'Não tem')
    })
}

resultado()

resultado = () =>{
    let acharMeuNome = nome => nome === 'Gabriel'
    console.log(nomes.filter(acharMeuNome))
}

resultado()
