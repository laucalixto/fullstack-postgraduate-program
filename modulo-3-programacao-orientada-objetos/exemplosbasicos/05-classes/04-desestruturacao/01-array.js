/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/05-classes/04-desestruturacao/01-array.js
 * @brief Demonstra a desestruturação de arrays em JavaScript.
 * Mostra como extrair elementos individuais, usar o operador rest (`...`)
 * e pular elementos durante a desestruturação.
 */

// Array original.
let nomeCompleto = ['Laurindo', 'Calixto', 'Oliveira'];

// Desestruturação básica: extrai os três primeiros elementos para variáveis separadas.
let [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log('O primeiro nome é: ' + primeiroNome);
console.log('O nome do meio é: ' + nomeDoMeio);
console.log('O último nome é: ' + ultimoNome);

console.log('---');

// Desestruturação com operador rest: extrai o primeiro elemento e agrupa o restante em um novo array.
let [primeiro, ...restante] = nomeCompleto;
console.log('O primeiro nome é: ' + primeiro);
console.log('O restante do nome é: "' + restante.toString().replace(',', ' ') + '"');

console.log('---');

// Desestruturação pulando elementos: extrai o primeiro e o terceiro elementos, ignorando o segundo.
let [soOPrimeiroNome, , soOUltimoNome] = nomeCompleto;
console.log('O primeiro nome é: ' + soOPrimeiroNome);
console.log('O último nome é: ' + soOUltimoNome);
