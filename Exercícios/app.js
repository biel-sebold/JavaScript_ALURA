// GABARITO
// let numeroSecreto = parseInt(Math.random() * 11)
// let tentativas = 1
// let chute

// alert('Boas vindas ao jogo do número secreto')

// while (chute != numeroSecreto) {
//     let chute = prompt('Escolha um número entre 1 e 10')
//     if (chute == numeroSecreto) {
//         break
//     } else {
//         if (chute > numeroSecreto) {
//             alert('O número secreto é menor')
//         } else {
//             alert('O número secreto é maior')
//         }
//     }
//     tentativas++
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
// alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)

alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 30) + 1;
console.log(`Número secreto: ${numeroSecreto}`);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');
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



