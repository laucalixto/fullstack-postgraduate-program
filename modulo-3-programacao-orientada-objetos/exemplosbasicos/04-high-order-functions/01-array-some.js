/**
 * @file 01-array-some.js
 * @brief Demonstra o uso do método `Array.some()` para verificar se pelo menos
 * um elemento do array satisfaz uma condição fornecida por uma função callback.
 * Retorna `true` se a callback retornar `true` para qualquer elemento, `false` caso contrário.
 * Para de iterar assim que encontra o primeiro elemento que satisfaz a condição.
 */

/**
 * Array de números para os exemplos.
 * @type {number[]}
 */
const array = [4, 5, 6, 7, 8, 9, 10];

/**
 * Verifica se existe algum número maior que 9 no array.
 * @type {boolean}
 * @description Usa `some` com uma arrow function para verificar a condição `value > 9`.
 */
const result = array.some((value) => value > 9);

/**
 * Verifica se existe algum número par no array.
 * @type {boolean}
 * @description Usa `some` com uma arrow function para verificar a condição `value % 2 == 0`.
 */
const hasPair = array.some((value) => value % 2 == 0);

// Exibe os resultados das verificações iniciais
console.log('Existe algum número maior que 9?', result);
console.log('Existe algum número par?', hasPair);

/**
 * Função callback nomeada para verificar se um número é ímpar.
 * @param {number} item - O elemento atual do array sendo processado.
 * @returns {boolean} `true` se o item for ímpar, `false` caso contrário.
 */
const regraImpar = (item) => item % 2 != 0;
console.log('Há algum número impar? ' + array.some(regraImpar));

/**
 * Função callback nomeada para verificar se um número é primo.
 * @param {number} item - O elemento atual do array sendo processado.
 * @returns {boolean} `true` se o item for primo, `false` caso contrário.
 */
const regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) {
        if (item % divisor == 0) ndiv++;
    }
    if (ndiv == 2) return true;
    return false;
};

console.log('Há algum número primo? ' + array.some(regraPrimo));
