// ------------------------------------------------DESAFIO 1--------------------------------------------------------
//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// Caso contrário, mostre "Boa semana!".

alert('Boas vindas ao jogo da semana!');
let diaDaSemana = 1;
console.log('Dia da semana: ', diaDaSemana);

let resposta = prompt('Qual é o dia da semana?');
console.log('Dia escolhido pelo usuário: ', resposta);

if (diaDaSemana <= 0) {
    console.log('Resposta inválida: ', resposta);
    alert('Valor inválido, preencha com valores maiores que 0!');
} else if (diaDaSemana > 7) {
    console.log('Resposta inválida: ', resposta);
    alert('Valor inválido, preencha com valores menores que 7!');
} else {
    if (diaDaSemana == 1 || diaDaSemana == 7) {
        alert('Bom fim de semana!');
    } else {
        alert('Boa semana');   
    }
}



//----------------------------------------------DESAFIO 2-----------------------------------------------------------
// //Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// alert('Boas vindas ao jogo dos números!');
// let numero = prompt('Informe o número que quiser: ');
// console.log('Resposta do usuário: ', numero);

// if (numero > 0) {
//     console.log('Número informado foi: ', numero);
//     alert('Número informado é positivo!'); 
// } else if (numero < 0) {
//     console.log('Número informado foi: ', numero);
//     alert('Número informado é negativo!');
// } else {
//     console.log('Número informado foi: ', numero);
//     alert('Número informado é o 0!');
// } 



// //---------------------------------------------DESAFIO 3---------------------------------------------------------
// //Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" 
// // no console do navegador. Caso contrário, mostre "Tente novamente para ganhar.".

// alert('Boas vindas ao jogo das pontuações!');
// let pontuacao = 99;
// console.log('Pontuação do usuário foi de ${pontuacao} pontos');

// if (pontuacao >= 100) {
//     console.log('Pontuação para ganhador foi de ${pontuacao} pontos');
//     alert('Parabéns, você venceu!');
    
// } else {
//     console.log('Pontuação para perdedor foi de ${pontuacao} pontos');
//     alert('Tente novamente para ganhar.');
// }



// //-------------------------------------------DESAFIO 4-----------------------------------------------------------
// //Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// alert('Boas vindas à consulta da sua conta bancária!');
// let saldo = 500
// console.log('Saldo é igual a R$', saldo);

// alert('Saldo da sua conta é de R$${saldo}');



// //-------------------------------------------DESAFIO 5-----------------------------------------------------------
// //Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// let nome = prompt('Informe seu nome:');
// console.log('Nome informado foi: ', nome);

// alert('Boas vindas ${nome}');
