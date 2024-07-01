//combinando e cortando arrays

const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = primeiro.concat(segundo);

console.log(combinado);
// dividindo um array 

const dividido = combinado.slice(1,3);// vai de um até o 3 [2,3]
const div2 = combinado.slice(2);// começa a partir do indice 2 
console.log(dividido);
console.log(div2);

