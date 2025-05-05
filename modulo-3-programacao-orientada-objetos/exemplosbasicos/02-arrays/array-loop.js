/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/02-arrays/array-loop.js
 * @brief Compara diferentes formas de iterar sobre arrays em JavaScript, especialmente arrays esparsos.
 * Demonstra o comportamento de `for...in`, `for...of` e o loop `for` clássico.
 */

let arraySample = [];
// Adiciona elementos, criando um array esparso (com "buracos").
arraySample[0] = Math.random();
arraySample[1] = Math.random();
arraySample[9] = Math.random();
console.log(arraySample.length);
console.log('Sample loop', ' -for .. in- ', 'retorna apenas item com valores');

console.log('Array esparso criado. Length:', arraySample.length); // Saída: 10

console.log('\nLoop com `for...in`');
console.log('(Itera sobre as *chaves/índices* que foram explicitamente definidos)');
console.log(' -=-=-=-=- ');
// `for...in` itera sobre as propriedades enumeráveis do objeto (incluindo índices de array).
// Ele pula os índices que não foram definidos.
for (let val in arraySample) console.log(' --> ' + val); // Saída: --> 0, --> 1, --> 9

console.log(' -=-=-=-=- \n');
console.log('Sample loop', ' -for .. of- ');
console.log('Loop com `for...of`');
console.log('(Itera sobre os *valores* do array, incluindo `undefined` para posições vazias)');
console.log(' -=-=-=-=- ');
// `for...of` itera sobre os valores iteráveis do array, de acordo com o `length`.
// Posições vazias são retornadas como `undefined`.
for (let val of arraySample) console.log(' --> ' + val); // Saída: valor, valor, undefined x7, valor

console.log(' -=-=-=-=- \n');
console.log('Sample loop', ' -for (;;))- ');
console.log('Loop com `for` clássico (índice e `length`)');
console.log('(Itera de 0 até `length - 1`, acessando cada índice)');
console.log(' -=-=-=-=- ');
// O loop `for` clássico acessa cada índice explicitamente. Índices não definidos retornam `undefined`.
for (let i = 0; i < arraySample.length; i++) console.log('  -->' + i + ': ' + arraySample[i]);
