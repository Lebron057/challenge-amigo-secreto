let amigo = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (nome == '') {
        alert('Campo do nome vazio, insira um nome!');
    } else {
        amigo.push(nome);
        console.log(amigo);        
    }

    limparCampo();
}

function limparCampo() {
    nome = document.getElementById('amigo');
    nome.value = '';
}