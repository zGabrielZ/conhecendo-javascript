class Endereco{
    
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set setRua(rua){
        this.rua = rua
    }

    
    set setBairro(bairro){
        this.bairro = bairro
    }

    
    set setCidade(cidade){
        this.cidade = cidade
    }

    
    set setEstado(estado){
        this.estado = estado
    }

}


const enderecoCliente = new Endereco('rua', 'bairro', 'cidade', 'estado')
console.log(enderecoCliente)

enderecoCliente.setRua = 'Nova rua'
enderecoCliente.setBairro = 'Novo bairro'
enderecoCliente.setCidade = 'Nova cidade'
enderecoCliente.setEstado = 'Novo estado'

console.log(enderecoCliente)