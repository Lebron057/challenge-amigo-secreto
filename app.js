let amigo = [];
let nomesSorteados = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim(); //trim() tira os espaços

    if (nome == '') {
        alert('Campo do nome vazio, insira um nome!');
    } else {
        amigo.push(nome);    
    }

    //limpar lista para não duplica-la
    document.getElementById('listaAmigos').innerHTML = '';

    //mostra na tela a lista de amigos
    for (let i = 0; i < amigo.length; i++) {
        exibirListaTela('listaAmigos', amigo[i]);
    }

    //limpa espaço do input
    limparCampo();
}

//limpa espaço do input
function limparCampo() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}

//Escolhe o id da tag do HTML e imprime o texto seguinte em formato de lista
function exibirListaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML += `<p>${texto}</p>`; //serve para deixar o texto em formato de lista, ou seja, a cada nome é acrescentado no texto pulando uma linha
}

//Escolhe o id da tag do HTML e imprime o texto seguinte
function exibirNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

//sortea um nome e retira aqueles que já foram sorteados
function sortearAmigo() {
    if (amigo.length < 1) {
        alert('Não há nomes para sortear!');
        document.getElementById('resultado').innerHTML = '';
    } else {
        //numero aleatorio de 0 até o tamanho da lista "amigo"
        let numeroAleatorio = parseInt(Math.random() * amigo.length);
        let nomeSorteado = amigo[numeroAleatorio];

        exibirNaTela('resultado', `Seu amigo secreto é ${nomeSorteado}!`);

        //adiciona nome sorteado a uma lista com os nomes sorteados
        nomesSorteados.push(nomeSorteado);
        //tira o nome da pessoa que foi sorteada
        amigo.splice(numeroAleatorio, 1);

        //atualiza a lista dos nomes ainda não sorteados
        document.getElementById('listaAmigos').innerHTML = '';
        for (let i = 0; i < amigo.length; i++) {
            exibirListaTela('listaAmigos', amigo[i]);
        }
    }
}