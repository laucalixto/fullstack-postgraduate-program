/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/04-high-order-functions/06-array-map.js
 * @brief Demonstração do uso do método `map()` em arrays JavaScript.
 *
 * Este script exemplifica como o método `map()` pode ser utilizado para
 * transformar cada elemento de um array e criar um novo array com os
 * resultados dessas transformações.
 */

// Array original contendo números inteiros.
const array = [4, 5, 6, 7, 8, 9, 10];

/**
 * Exemplo 1: Mapeando para um novo array com valores dobrados.
 *
 * O método `map()` itera sobre cada `item` do `array` original.
 * Para cada `item`, a função `(item) => item * 2` é executada,
 * retornando o dobro do valor do item.
 * O `map()` coleta todos esses valores retornados e cria um novo array `newArray`.
 */
let newArray = array.map((item) => item * 2);
// Imprime o novo array resultante: [ 8, 10, 12, 14, 16, 18, 20 ]
console.log(newArray);

/**
 * Exemplo 2: Mapeando para um novo array de objetos.
 *
 * Aqui, o `map()` novamente itera sobre cada `item` do `array` original.
 * A função `(item) => { return { x: item, y: 2 * item }; }` é executada
 * para cada item.
 * Esta função retorna um objeto com duas propriedades:
 * - `x`: contendo o valor original do item.
 * - `y`: contendo o dobro do valor original do item.
 * O `map()` coleta todos esses objetos e cria um novo `newArray` (sobrescrevendo
 * o anterior).
 */
newArray = array.map((item) => {
    return { x: item, y: 2 * item };
});
// Imprime o novo array de objetos resultante:
// [
//   { x: 4, y: 8 },  { x: 5, y: 10 }, { x: 6, y: 12 },
//   { x: 7, y: 14 }, { x: 8, y: 16 }, { x: 9, y: 18 },
//   { x: 10, y: 20 }
// ]
console.log(newArray);
