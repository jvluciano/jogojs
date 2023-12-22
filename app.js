let numeroLimite = 100;
let numerosSorteados = [];
let numeroAleatorio = definirNumeroAleatorio();
let contador = 1;
let chute;
let mensagemDeErro;
let mensagemDeVitória;

function definirTextosExibidos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function definirTextosIniciais(){
    definirTextosExibidos('h1', 'Jogo do número secreto');
    let mensagemDoIntervalo = `Digite um número de 1 a ${numeroLimite}`;
    definirTextosExibidos('p', mensagemDoIntervalo);
    responsiveVoice.speak('Jogo do número secreto', 'Brazilian Portuguese Female', {rate:1.2});
}

definirTextosIniciais();

function verificarChute() {
    chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        let palavraVezes = contador > 1? 'vezes':'vez';
        definirTextosExibidos('h1', 'Acertouuu Miseravi!');
        mensagemDeVitória = `Parabéns o número aleatório é ${numeroAleatorio}, você chutou ${contador} ${palavraVezes}`;
        definirTextosExibidos('p', mensagemDeVitória);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled',true);
        responsiveVoice.speak('Acertouuu Miseravi!', 'Brazilian Portuguese Female', {rate:1.2});
    } else {
        if (chute > numeroAleatorio) {
            definirTextosExibidos('h1', 'Eroouuu!');
            mensagemDeErro = `o número aleatório é menor que ${chute}`;
            definirTextosExibidos('p', mensagemDeErro);
            responsiveVoice.speak('Eroouuu!', 'Brazilian Portuguese Female', {rate:1.2});
        } else {
            definirTextosExibidos('h1', 'Eroouuu!');
            mensagemDeErro = `o número aleatório é maior que ${chute}`;
            definirTextosExibidos('p', mensagemDeErro);
            responsiveVoice.speak('Eroouuu!', 'Brazilian Portuguese Female', {rate:1.2});
        }
    }
    contador++;
    limpaCampo();
}

function definirNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let tamanhoDaLista = numerosSorteados.length;
    if(tamanhoDaLista == numeroLimite){
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)){
        return definirNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        return numerosSorteados[numerosSorteados.length - 1];
    }
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limpaCampo();
    numeroAleatorio = definirNumeroAleatorio();
    contador = 1;
    definirTextosIniciais();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('chutar').removeAttribute('disabled');
}