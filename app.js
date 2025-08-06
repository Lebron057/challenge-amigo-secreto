let amigo = [];
numeroAmigos = 0;

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim(); //trim() tira os espaços

    if (nome == '') {
        alert('Campo do nome vazio, insira um nome!');
    } else {
        amigo.push(nome);
        numeroAmigos++;
        console.log(amigo);  
        console.log('numeroAmigos =', numeroAmigos);      
    }

    document.getElementById('listaAmigos').innerHTML = '';

    //mostra na tela a lista de amigos
    for (let i = 0; i < amigo.length; i++) {
        exibirListaTela('listaAmigos', amigo[i]);
    }

    limparCampo();
}

function limparCampo() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}

function exibirListaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML += `<p>${texto}</p>`;
}

function exibirNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function sortearAmigo() {
    if (numeroAmigos < 1) {
        alert('Não há nomes para sortear!');
    } else {
        let numeroAleatorio = parseInt(Math.random() * numeroAmigos);
        console.log('numeroAleatorio =', numeroAleatorio);
        exibirNaTela('resultado', `Seu amigo secreto é ${amigo[numeroAleatorio]}!`);
    }
}