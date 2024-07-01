const convidadosAnfitriao = {
    'Marcos': ['Danilo', 'Ana', 'Carlos'],
    'João': ['Maria', 'Pedro', 'Lucas'],
};

function verificarEntrada() {

    const nome = document.getElementById("nomeInput").value;
    const anfitriao = document.getElementById("convidadoInput").value;

    const listaConvidados = convidadosAnfitriao[anfitriao];
    let resultado;
    
    if (listaConvidados && listaConvidados.includes(nome)) {
        resultado = "Você pode entrar!";
    } else { 
        resultado = "Você não pode entrar!";
    }
    document.getElementById("resultado").innerText = resultado;
}