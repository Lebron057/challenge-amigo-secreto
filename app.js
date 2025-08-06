let amigo = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (nome == '') {
        alert('Campo do nome vazio, insira um nome!');
    } else {
        amigo.push(nome);
        console.log(amigo);        
    }

    document.getElementById('listaAmigos').innerHTML = '';

    let cont = 0;

    while (cont < amigo.length) {
        exibirNaTela('listaAmigos', amigo[cont]);
        cont++;
    }

    limparCampo();
}

function limparCampo() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}

function exibirNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML += `<p>${texto}</p>`;
}