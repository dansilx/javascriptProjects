const res = fizzbuzz(6)
console.log(res)

function fizzbuzz(num) {
    if (typeof num !== 'number') 
        return 'Não é um número'
        if (num % 3 === 0 && num % 5 === 0) 
            return 'FizzBuzz'
        if (num % 3 === 0)
            return 'Fizz'
        if (num % 5 === 0)
            return 'Buzz'
    return num
}
