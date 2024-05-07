function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
        return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }    
}

const celular1 = criarCelular('Zenfone', 5.5, 5000)
console.log(celular1)

function funcionario(nome, idade, salario) {
    return {
        nome,
        idade,
        salario
    }
}

const f1 = funcionario('Ana', 21, 1500)
console.log(f1)