console.log(triangle(6))

function triangle(n) {
    let matriz = [];
    for(let i = 0; i < n; i++) {
        matriz[i] = [];
        for(let j = 0; j <= i; j++) {
            matriz[i][j] = "*";
        }
    }
    return matriz;
}
