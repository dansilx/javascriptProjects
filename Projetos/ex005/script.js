console.log(imparPar(6))

function imparPar(num) {
    for (let i = 1; i <= num; i++)
        if (i % 2 === 0) 
            console.log(i,'par')
        else    
            console.log(i, 'ímpar')
}