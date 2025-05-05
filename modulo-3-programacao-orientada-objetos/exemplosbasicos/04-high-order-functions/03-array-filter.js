/**
 * @file 03-array-filter.js
 * @brief Demonstra o uso do método `Array.filter()` para criar um **novo** array
 * contendo apenas os elementos do array original que satisfazem uma condição
 * fornecida por uma função callback.
 */

/**
 * Array de números para os exemplos de filtragem.
 * @type {number[]}
 */
const array = [4, 5, 6, 7, 8, 9, 10];

/**
 * Cria um novo array contendo apenas os números pares do array original.
 * @type {number[]}
 * @description Usa `filter` com uma arrow function para incluir apenas elementos onde `value % 2 == 0` é `true`.
 */
const result = array.filter((value) => value % 2 == 0);

/**
 * Função auxiliar para verificar se um número é primo.
 * @param {number} item - O número a ser verificado
 * @returns {boolean} `true` se o número for primo, `false` caso contrário.
 */
const isPrime = (item) => {
    // Números menores ou iguais a 1 não são primos
    if (item <= 1) return false;
    // Verifica divisibilidade de 2 até a raiz quadrada do número (otimização)
    // Ou, de forma mais simples (como no código original), até item - 1
    for (let i = 2; i < item; i++) if (item % i == 0) return false;
    return true; // Se não encontrou divisores, é primo
};

/**
 * Cria um novo array contendo apenas os números primos do array original.
 * @type {number[]}
 * @description Usa `filter` passando a função nomeada `isPrime` como callback.
 */
const primes = array.filter(isPrime);

// Exibe os resultados
console.log('Números pares:', result);
console.log('Números primos:', primes);
