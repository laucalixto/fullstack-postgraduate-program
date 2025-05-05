/**
 * @file 05-array-reduce.js
 * @brief Demonstra o uso do método `Array.reduce()` para executar uma função redutora
 * (callback) em cada elemento do array, resultando em um único valor de saída (o acumulador).
 * É útil para somar, multiplicar, encontrar máximos/mínimos, agrupar, etc.
 */

/**
 * Array de números para os exemplos de redução.
 * @type {number[]}
 */
const array = [4, 5, 6, 7, 8, 9, 10];

/**
 * Exemplo 1: Calcula a soma de todos os números pares do array usando `reduce`.
 * @type {number}
 * @description A função callback recebe o `acumulator` (valor acumulado da iteração anterior)
 * e o `value` (elemento atual). Se `value` for par, ele é adicionado ao `acumulator`.
 * Se for ímpar, 0 é adicionado (ou seja, o acumulador não muda).
 * O `0` final é o valor inicial do `acumulator`.
 */
const result = array.reduce((acumulator, value) => (acumulator += value % 2 == 0 ? value : 0), 0);

/**
 * Exemplo 2: Calcula a soma total de todos os números do array usando `reduce`.
 * @type {number}
 * @description A função callback simplesmente adiciona o `value` atual ao `acumulator`.
 * O valor inicial do acumulador (segundo argumento do reduce) é omitido,
 * então o primeiro elemento do array (4) é usado como valor inicial e a iteração começa do segundo elemento.
 */
const total = array.reduce((acumulator, value) => acumulator + value);

console.log('A soma dos números pares é', `${result}.`);
console.log('A soma de todos os é', `${total}.`);
