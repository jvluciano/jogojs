alert('Bora jogar o jogo do número secreto');
let intervaloDeNumeros = parseInt(Math.random() * 1000 + 1);
let numeroSecreto = parseInt(Math.random() * intervaloDeNumeros +1);
let chute;
let tentativas = 1;
console.log (numeroSecreto);

while(chute != numeroSecreto){
    chute = prompt(`Digite um número entre 1 e ${intervaloDeNumeros}`);
    if(numeroSecreto == chute){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`Eroooou! o número secreto é menor que ${chute}`);
        }else{
            alert(`Eroooou! o número secreto é maior que ${chute}`);
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';
alert(`Acertoo Miseravi! O número secreto é ${numeroSecreto}, você fez ${tentativas} ${palavraTentativa}`);