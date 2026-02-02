'use strict'

const botaoTrocarCor = document.getElementById('trocar-cor')

function trocarCor () {
    const corDigitada = document.getElementById('cor').value.toLowerCase().trim()
    
    const cores = {
        vermelho: 'red',
        azul: 'blue',
        verde: 'green',
        amarelo: 'yellow',
    }
    
    document.documentElement.style.setProperty('--cor-bg', cores[corDigitada])
    

}

botaoTrocarCor.addEventListener('click', trocarCor)

