verificaVelocidade(130)

function verificaVelocidade(velocidade) {
    const velocidadeMax = 70
    const kmPorPonto = 5
    if (velocidade <= velocidadeMax)
        console.log('ok')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMax) / kmPorPonto))
        if (pontos >= 12)
            console.log('Carteira Suspensa')
        else    
            console.log('Pontos', pontos)
    } 

}