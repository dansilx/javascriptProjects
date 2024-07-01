//combinando e cortando arrays

const primeiro = [1,2,3];
const segundo = [4,5,6];

//const combinado = primeiro.concat(segundo);
//const dividido = combinado.slice(1,3);

//spread
const combinado = [...primeiro,...segundo];
console.log(combinado);

const clonado = [...combinado];
console.log(clonado);
const percentual = [...primeiro, ...'%', ...segundo];
console.log(percentual);