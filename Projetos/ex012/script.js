//Igualdade de Objetos (Exercicio)

//Criar dois objetos Endereço 

function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c')
const endereco2 = new Endereco('a', 'b', 'c')

function saoIguais(endereco1, endereco2) {
    //comparar se as propriedades são iguais

}

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    //comparando se a referencia do objeto aponta para o memso local de memoria
}