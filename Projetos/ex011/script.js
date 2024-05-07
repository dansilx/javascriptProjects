//Objeto ENDEREÇO

//Criar um objeto endereço que contenha 
//Rua
//Cidade
//CEP
//exibirEndereco(endereco)

// function Endereco(rua, nro, bairro, cidade, cep) {
//     this.rua = rua,
//     this.nro = nro,
//     this.bairro = bairro,
//     this.cidade = cidade,
//     this.cep = cep
//     this.exibirEndereco = function() {
//         console.log(endereco)
//     }
// }

// let endereco = new Endereco('Rua Feliz', '30', 'Felicidade', 'Nova Esperança', '19000-000')

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
}

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]) 
}

exibirEndereco(endereco)