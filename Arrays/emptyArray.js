//removendo elementos da array
const nums = [1,2,3,4,5,6]; //para reatribuiré necessário que seja um let e não const

//nums = []; => reatribuir com let

//Solução 2

nums.length = 0; //solução mais eficaz
console.log(nums);

//Solução 3
nums.splice(0, nums.length);
console.log(nums);

//Solução 4
while(nums.length > 0) 
    nums.pop(); //solução que custa muito processamento quando existem muitos elementos