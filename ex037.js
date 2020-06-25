class Conta{
    constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
        this.saldoCorrente = saldoCorrente
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = jurosPoupanca
    }

    deposito(saldo){
        this.saldoCorrente +=saldo
    }

    saque(saldo){
        this.saldoCorrente -=saldo
    }

    poupancaParaCorrente(valor){
        if(this.saldoPoupanca != 0){
            this.saldoPoupanca -= valor
            this.saldoCorrente += valor
        }
        else{
            console.log('Não pode transferir, pois tem 0 reais')
        }
    }

}

class ContaEspecial extends Conta{
    constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
        super(saldoCorrente,saldoPoupanca,jurosPoupanca*2)
    }
}

const conta = new Conta(20,20,20)
console.log(conta)
conta.deposito(40)
console.log(conta.saldoCorrente)
conta.saque(20)
console.log(conta.saldoCorrente)
conta.poupancaParaCorrente(5)
console.log(conta)

const contaEspecial = new ContaEspecial(20,20,30)
console.log(contaEspecial)