exibeNumPrimo(53);

function exibeNumPrimo(lmt) {
    for (let num = 2; num <= lmt; num++) {
        // let primo = true;

        // for(let div = 2; div < num; div++) {
        //     if (num % div === 0) 
        //         primo = false;
        //         break;
        // }           
        if (primo) console.log(num);    
    }
}

function numPrimo(num) {
    for(let div = 2; div < num; div++) {
        if (num % div === 0) 
            return false;
    }
    return true;
}


