//removendo elementos

const nums = [1,2,3,4,5,6];

//Final
const ultimo = nums.pop();
console.log(ultimo);
console.log(nums);

//Inicio

const primeiro = nums.shift()
console.log(primeiro);
console.log(nums);

//Meio
const meio = nums.splice(2,1);
console.log(meio);
console.log(nums);

