class Conta{
    constructor(saldo){
        this.saldo = saldo
    }

    get getSaldo(){
        return this.saldo
    }

    set setSaldo(saldo){
        this.saldo = saldo
    }

    deposito(dinheiro){
        this.saldo+=dinheiro
    }

    saque(dinheiro){
        this.saldo-=dinheiro
    }
}

const conta = new Conta(200.0)
conta.deposito(200)
console.log(conta.getSaldo)
conta.saque(100)
console.log(conta.getSaldo)

console.log('----------------------')

const minhaConta = {
    saldo:null,
    
    getSaldo(){
        return this.saldo
    },

    setSaldo(saldo){
        this.saldo = saldo
    },

    deposito(diniheiro){
        this.saldo +=diniheiro
    },
    
    saque(diniheiro){
        this.saldo -=diniheiro
    }
}

minhaConta.setSaldo(500)
console.log(minhaConta.getSaldo())
minhaConta.deposito(400)
console.log(minhaConta.getSaldo())
minhaConta.saque(400)
console.log(minhaConta.getSaldo())

console.log('---------------------------')

