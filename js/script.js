let j1 = document.querySelector('.j1')
let j2 = document.querySelector('.j2')
let boxes = document.querySelectorAll('.box')
let botoes = document.querySelectorAll('#button-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let segundoJogador

// contador de jogadas

let jogador1 = 0
let jogador2 = 0

// add o evento de click aos boxes

for (let i = 0; i < boxes.length; i++) {
    // quando alguem clica na caixa
    boxes[i].addEventListener('click', function () {

        let elemento = checarElemento(jogador1, jogador2)

        if (this.childNodes.length == 0) {
            let cloneElemento = elemento.cloneNode(true)

            this.appendChild(cloneElemento)

            // computa jogada

            if (jogador1 == jogador2) {
                jogador1++

                if(segundoJogador == 'ia-player'){
                    // funcao que executa a jogada
                    botJogando()
                    jogador2++
                }

            } else {
                jogador2++
            }

            // checa quem ganhou
            verificarVitoria()

        }
    })
}

function checarElemento(jogador1, jogador2) {
    if (jogador1 == jogador2) {
        // jogador 1 q comeca
        elemento = j1
    } else {
        // jogador 2 q comeca  
        elemento = j2
    }

    return elemento
}

function verificarVitoria() {
    let b1 = document.getElementById('block-1')
    let b2 = document.getElementById('block-2')
    let b3 = document.getElementById('block-3')

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0
        && b3.childNodes.length == 0) {
        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className

        // vitorias 
        if (b1Child == 'j1' && b2Child == 'j2') {
            // j1 venceu
            declarandoVitorioso('j1')
        } else if (b2Child == 'j1' && b1Child == 'j2') {
            // j2 venceu
            declarandoVitorioso('j2')
        }
    }

    if (b1.childNodes.length > 0 && b2.childNodes.length == 0
        && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        // vitorias 
        if (b3Child == 'j1' && b1Child == 'j2') {
            // j1 venceu
            declarandoVitorioso('j1')
        } else if (b1Child == 'j1' && b3Child == 'j2') {
            // j2 venceu
            declarandoVitorioso('j2')
        }
    }

    if (b1.childNodes.length == 0 && b2.childNodes.length > 0
        && b3.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        // vitorias 
        if (b2Child == 'j1' && b3Child == 'j2') {
            // j1 venceu
            declarandoVitorioso('j1')
        } else if (b2Child == 'j2' && b3Child == 'j1') {
            // j2 venceu
            declarandoVitorioso('j2')
        }
    }

}

// limpa o jogo, declara o vencedor e atualizar o placar
function declarandoVitorioso(vitorioso){
    let scoreboardJ1 = document.querySelector('.scoreboard-1')
    let scoreboardJ2 = document.querySelector('.scoreboard-2')
    let msg = ''

    if(vitorioso == 'j1'){
        scoreboardJ1.textContent = parseInt(scoreboardJ1.textContent) + 1
        msg = 'Jogador 1 venceu !'
    } else if(vitorioso == 'j2'){
        scoreboardJ2.textContent = parseInt(scoreboardJ2.textContent) + 1
        msg = 'Jogador 2 venceu !'
    }

    // exibir a msg de vitoria 
    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    // esconde msg 
    setTimeout(function(){
        messageContainer.classList.add('hide')
    },3000)

    // zera as jogadas 
    jogador1 = 0
    jogador2 = 0

    // remover os que ta marcado nas div 

    let boxesToRemove = document.querySelectorAll('.box div')

    for(let i =0;i<boxesToRemove.length;i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }

}  

// evento para saber se é 2 jogadores ou IA

for(let i=0;i<boxes.length;i++){
   
    botoes[i].addEventListener('click',function(){
        segundoJogador = this.getAttribute('id')
        for(let j=0;j<botoes.length;j++){
            botoes[j].style.display = 'none'
        }
    })

    setTimeout(function(){
        let container = document.querySelector('.hide')
        container.classList.remove('hide')
    },3000)
}

// bot jogando 

function botJogando(){
    let cloneJ2 = j2.cloneNode(true)
    contador = 0
    preenchido = 0

    for(let i=0;i<boxes.length;i++){
        let aleatorio = Math.floor(Math.random() * 5)
        
        //so preencher se estiver vazio o filho
        if(boxes[i].childNodes[0] == undefined){
            if(aleatorio<=1){
                boxes[i].appendChild(cloneJ2)
                contador++
                break
            // chegar de quantas sao preenchidas
            }else{
                preenchido++
            }
        }
    }

    if(contador == 0 && preenchido <3){
        botJogando()
    }

}