// arrow function

const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'}
]

//marcas.find(function(marca){
//  return marca.nome === 'a'
//})

marcas.find((marca)=> {
    return marca.nome === 'a'
})

marcas.find(marca => {
    return marca.nome === 'a'
}) //alternativa 2

marcas.find(marca => marca.nome === 'a')
//alternativa 3

