let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let Tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Boas vindas ao Jogo do Número Secreto!');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10:');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;

if (chute == numeroSecreto) {
    exibirTextoNaTela ('h1', 'Parabéns!');
    let palavraTentativa = Tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou o Número Secreto com ${Tentativas} ${palavraTentativa}.`;
    exibirTextoNaTela ('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
}
else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela ('h1', 'O Número Secreto é menor,');
        exibirTextoNaTela ('p', 'tente novamente.');
    }
    else {exibirTextoNaTela ('h1', 'O Número Secreto é maior,');
        exibirTextoNaTela ('p', 'tente novamente.');

    }
    Tentativas++ 
    limparCampo ();
}
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
}
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
        else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido
        }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    Tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}