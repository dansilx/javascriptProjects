
const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

lerProp(filme)

function lerProp(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
    }
}