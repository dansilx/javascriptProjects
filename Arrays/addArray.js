// ADICIONANDO ELEMENTOS

const nums = [1, 2, 3];


//Inicio
nums.unshift(0);
console.log(nums);

//meio
nums.splice(1, 0, 'a');
console.log(nums);

//final
nums.push(5);
console.log(nums);