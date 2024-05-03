console.log('danilo')
console.log('Hello World!')

let idade = 5;
console.log(idade);
let altura = 183;
console.log(altura);

const valorIngressoAdulto = 20;
//valorIngressoAdulto = 30;
console.log(valorIngressoAdulto);


//Tipos de Variáveis
let nome = 'Danilo' //string literal
let idade2 = 33; //number literal
let itsApproved = true; // boolean
let sobrenome; // Undefined
let corSelecionado = null; //Redefinir um valor 


// como descobrir tipo da variável
typeof nome;
nome = 5;
typeof nome;
typeof idade;


//Como declarar um objeto no javascript

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza'
};

let cliente = {
    nome: null,
    idade: null,
    telefone: null,
    endereco: null,
    cpf: null
};

let funcionario = {
    idfunc: null,
    nome: null, 
    cpf: null,
    salario: null
};

let conta = {
    idconta: null,
    nome: null,
    saldo: null,
};

console.log(pessoa);
console.log(cliente);
console.log(funcionario);

//arrays - conjunto de dados acessado por indice

let familia = [26, 45, 50, 17];

console.log(familia.length);
console.log(familia[2]);

//Functions Verbo + Substantivo
let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + " " + tonalidade; 
}

console.log(corSite);
resetaCor("vermelho", "cobre");
console.log(corSite);

//Tipos de Função
//Realizar uma tarefa, e não devolver nada

function dizerNome(){
    console.log('danilo');
}

dizerNome(); 
// Faz um calculo ou operação e retorna algo 

function multiplica2(valor){
    return valor * 2;
}

//console.log(multiplica2(5));
let resultado = multiplica2(5);

console.log(resultado);

//Operadores Arutméticos

let salario = 100;

// + , - , * , / , **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

//++ , --

let idade3 = 18;

console.log(idade3++);
console.log(idade3);
console.log(++idade3);

let idade4 = 17;
console.log()

//Operadores de Atribuição

// = , += , -= , *=  são operadores  de atribuição


//Operazdores de Igualdade
//Igualdade estrita

console.log(1 === 1);
console.log('1' === 1); // comparação mais adequada

//Igualdade solta
console.log('1' == 1);
console.log(1 == 1);

//Operadores Ternários

//Tem um cliente, 100 premium , comum

let pontos = 200;

let tipo = pontos > 100? 'premium' : 'comum';

console.log(tipo)

//Operadores Lógicos  

// AND (&&)=> retorna true se os dois forem true 

console.log(true && true);
console.log(false && true); 


let maiorIdade = true;
let possuiCLT = true;
let podeAplicar = maiorIdade && possuiCLT;

console.log(podeAplicar);

//OR ( || ) => retorna true se um dos operandos for true

let maiorIdade2 = false;
let possuiCLT2 = true;
let podeAplicar2 = maiorIdade2 || possuiCLT2;
console.log(podeAplicar2);

// NOT (!)

let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);

//Operadores de comparação não booleanos

// Falsy => undefined, null, 0, false, '', NaN - not a number

//Truthy => tudo que não seja falsy

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);

//Como trocar valores

let a = 'vermelho';
let b = 'azul';

console.log(a);
console.log(b);

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//IF ELSE

//Se a hora estiver entre 06:00 até 12:00 : Bom dia!
//Se estiver entre 12:00 até 18:00 : Boa Tarde!
//Caso contrário : Boa Noite!
let hora = 10

if (hora > 6 && hora < 12) {
    console.log('Bom Dia!')
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite!')
}

// SWITCH CASE

let permissao = 'diretor'

switch (permissao) {
    case 'comum':
        console.log('usuário comum')
        break
    case 'gerente':
        console.log('usuário gerente')
        break
    case 'diretor':
        console.log('usuário diretor')
        break
    default:
        console.log('usuário não reconhecido')


//Laço Loop For

    for (let i = 0; i < 5; i++) {console.log('Estou aprendendo',i)}

    for(let i = 5; i >= 1; i--) {
        if(i % 2 !== 0) {
            console.log(i)
        }
    }
// While

    let i = 5

    while(i >= 1) {
        if(i % 2 !== 0) {
            console.log(i)
        }
    }

//Do While
    let i = 1
    do {
        console.log('digitando!',i)
        i++
    } while (i <= 10)

//for in

    const pessoa = {
        nome: 'Danilo',
        idade: 33
    }

    for(let key in pessoa) {
        console.log(key)
    }

    const cores = ['vermelho', 'azul', 'verde']

    for (let indice in cores) {
        console.log(indice, cores[indice])
    }

    //for of 

    for(let cor of cores) {
        console.log(cor)
    }