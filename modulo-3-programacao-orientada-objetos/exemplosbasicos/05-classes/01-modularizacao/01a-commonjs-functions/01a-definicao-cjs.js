/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/classes/01-modularizacao/01a-commonjs-functions/01a-definicao-cjs.js
 * @brief Define e exporta funções relacionadas a círculos usando o padrão CommonJS.
 */

/**
 * Calcula a área de um círculo.
 * @param {number} r - O raio do círculo.
 * @returns {number} A área do círculo.
 */
exports.area = (r) => Math.PI * r ** 2;
/**
 * Calcula a circunferência de um círculo.
 * @param {number} r - O raio do círculo.
 * @returns {number} A circunferência do círculo.
 */
exports.circunferencia = (r) => 2 * Math.PI * r;
