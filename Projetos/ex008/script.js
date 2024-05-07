const array = [90, 90, 80]

console.log(mediaAluno(array))

function mediaAluno(notas) {
    const media = calcMedia(notas)
    if (media < 59) return 'F'
    if (media < 69) return 'D'
    if (media < 79) return 'C'
    if (media < 89) return 'B'
    return 'A'
}

function calcMedia(array) {
    let soma = 0
    for (let valor of array) {
        soma += valor
    }
    return soma / (array.length)
}