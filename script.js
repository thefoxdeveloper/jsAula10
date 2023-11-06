// 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
// inteiros já preenchido e imprima todos os valores pares.

// let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let pares = [];
// for (let v of vetor) {
//   if (v % 2 === 0) {
//     pares.push(v);
//   }
// }
// document.write(pares);

// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.

// let vetor = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let soma = 0;
// for (v of vetor) {
//   soma += v;
// }
// document.write(soma);

// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.
// let numPer = [];

// for (let num = 1; numPer.length < 4; num++) {
//   let soma = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       soma += i;
//     } else {
//       continue;
//     }
//   }
//   if (soma == num) {
//     numPer.push(soma);
//   }
// }
// document.write(numPer);

// 4. Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

// let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let esta = false;
// let request = Number(prompt("Digite o numero"));
// for (num of lista) {
//   if (num == request) {
//     esta = true;
//   } else {
//   }
// }
// esta ? alert("O numero está na lista") : alert("O numero não está na lista");

// 5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

// let nomes = [];
// while (nomes.length < 5) {
//   nomes.push(prompt("Digite os nomes"));
// }
// document.write(nomes.reverse());
