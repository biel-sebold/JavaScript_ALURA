alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`Número secreto: ${numeroSecreto}`);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    //verifica o valor do chute após a entrada do usuário
    console.log('Valor do chute: ', chute);
    //verifica a comparação entre "chute" e "numeroSecerto"
    console.log('Resultado: ', chute == numeroSecreto);


    //se o chute for igual ao núermo secreto
    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            console.log(`Número Secreto: ${numeroSecreto}\nChute: ${chute}`);
            alert(`O número secreto é menor que ${chute}!`);
        } else {
            console.log(`Número Secreto: ${numeroSecreto}\nChute: ${chute}`);
            alert(`O número secreto é maior que ${chute}!`);
        }
        tentativas++;
    }

}

//Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) em ${tentativas} ${palavraTentativa}!!!`);

// //fazendo os IF
// if (tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) em ${tentativas} tentativas!!!`);
// } else {
//     alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto} de primeira!!!`);
// }



