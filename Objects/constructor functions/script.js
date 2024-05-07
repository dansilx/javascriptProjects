function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log('Fazendo Ligação...')
    }
}

const celular = new Celular('Asus', 5.5, 5000)
console.log(celular)

function Funcionario(nome, idade, salario) {
    this.nome = nome,
    this.idade = idade,
    this.salario = salario
}

const funcionario1 = new Funcionario('João', 19, 1300)
console.log(funcionario1)