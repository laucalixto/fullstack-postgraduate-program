/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/02-arrays/array-lenght.js
 * @brief Demonstra o comportamento da propriedade `length` de arrays em JavaScript e iteração sobre arrays esparsos.
 * Mostra como `length` é atualizado ao adicionar elementos por índice ou com `push`,
 * e como diferentes laços (`for...in`, `for...of`, `for` clássico) lidam com índices vazios.
 */

let arraySample = [];

// Adiciona um elemento no índice 0.
arraySample[0] = Math.random();
console.log(arraySample.length);
console.log('Após arraySample[0]:');
console.log('Length:', arraySample.length); // Saída: 1
console.log('Iterando com for...in (mostra índices definidos):');
for (let item in arraySample) console.log(' --> ' + item); // Saída: --> 0

console.log(' -=-=-=-=- ');

// Adiciona um elemento ao final do array.
arraySample.push(Math.random());
console.log(arraySample.length);
console.log('Após push():');
console.log('Length:', arraySample.length); // Saída: 2
console.log('Iterando com for...in (mostra índices definidos):');
for (let item in arraySample) console.log(' --> ' + item); // Saída: --> 0, --> 1

console.log(' -=-=-=-=- ');

// Adiciona um elemento em um índice distante, criando um array esparso.
arraySample[9] = Math.random();
console.log(arraySample.length);
console.log('Após arraySample[9]:');
console.log('Length:', arraySample.length); // Saída: 10 (length é o maior índice + 1)
console.log('Iterando com for...of (mostra valores, incluindo undefined para vazios):');
// for...of itera sobre os *valores* do array, incluindo posições vazias (que resultam em `undefined`).
for (let item of arraySample) console.log(' --> ' + item); // Saída: valor, valor, undefined x7, valor

console.log(' -=-=-=-=- ');

// Iterando com um loop for clássico baseado no `length`.
console.log('Iterando com for clássico (mostra índice e valor, incluindo undefined):');
for (let i = 0; i < arraySample.length; i++) console.log('  -->' + i + ': ' + arraySample[i]);
