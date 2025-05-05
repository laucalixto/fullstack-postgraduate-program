/**
 * @file 02-array-every.js
 * @brief Demonstra o uso do método `Array.every()` para verificar se **todos**
 * os elementos do array satisfazem uma condição fornecida por uma função callback.
 * Retorna `true` apenas se a callback retornar `true` para **todos** os elementos.
 * Retorna `false` assim que encontra o primeiro elemento que **não** satisfaz a condição.
 */

/**
 * Array de números para os exemplos.
 * @type {number[]}
 */
const array = [4, 5, 6, 7, 8, 9, 10];

/**
 * Verifica se todos os números no array são maiores que 3.
 * @type {boolean}
 * @description Usa `every` com uma arrow function para verificar a condição `value > 3`.
 */
const result = array.every((value) => value > 3);

/**
 * Verifica se todos os números no array são pares.
 * @type {boolean}
 * @description Usa `every` com uma arrow function para verificar a condição `value % 2 == 0`.
 */
const allPairs = array.every((value) => value % 2 == 0);

// Exibe os resultados das verificações
console.log('Todos os números são maiores que 3?', result);
console.log('Todos os números são pares?', allPairs);
