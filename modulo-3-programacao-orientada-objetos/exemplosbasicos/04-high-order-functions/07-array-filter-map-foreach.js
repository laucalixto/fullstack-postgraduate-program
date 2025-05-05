/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/04-high-order-functions/07-array-filter-map-foreach.js
 * @brief Demonstra o encadeamento dos métodos `filter`, `map` e `forEach` em arrays.
 *
 * Este script primeiro filtra os números primos de um array, depois mapeia
 * cada número primo para um objeto indicando seu valor e se é par,
 * e finalmente imprime essas informações no console.
 */

// Array original de números inteiros.
const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Calcula o número de divisores de um determinado número.
 * Usado aqui para identificar números primos (que têm exatamente 2 divisores).
 * @param {number} item - O número para o qual contar os divisores.
 * @returns {number} O número total de divisores.
 */
const dividersNumber = (item) => {
    let ndiv = 0;
    // Itera de 1 até o próprio número para encontrar todos os divisores.
    for (let divisor = 1; divisor <= item; divisor++) if (item % divisor == 0) ndiv++;
    return ndiv;
};

// Encadeamento dos métodos:
array
    // 1. filter: Mantém apenas os números que são primos (têm 2 divisores).
    .filter((nro) => dividersNumber(nro) == 2)
    // 2. map: Transforma cada número primo filtrado em um objeto.
    //    O objeto contém o número original (`x`) e um booleano indicando se é par (`par`).
    .map((item) => {
        return { x: item, par: item % 2 == 0 };
    })
    // 3. forEach: Itera sobre cada objeto criado pelo map e imprime a informação.
    .forEach((obj) => console.log(obj.x + ' é par? ' + obj.par));

// Saída esperada:
// 2 é par? true
// 3 é par? false
// 5 é par? false
// 7 é par? false
