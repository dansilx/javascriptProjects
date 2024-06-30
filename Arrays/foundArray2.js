//encontrando elementos do tipo referencia

const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'}
]

marcas.find(function(marca){
    return marca.nome === 'a';
});