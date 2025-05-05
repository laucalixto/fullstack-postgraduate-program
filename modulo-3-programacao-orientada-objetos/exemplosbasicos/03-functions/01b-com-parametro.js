/**
 * @file 01b-com-parametro.js
 * @brief Demonstra funções com parâmetros, incluindo valores padrão e o tratamento de argumentos extras.
 */

/**
 * Calcula a potência de uma base elevada a um expoente.
 * Se o expoente não for fornecido, assume o valor padrão 2.
 * Se a base não for fornecida, o resultado será NaN (1 * undefined).
 * @param {number} base - O número base.
 * @param {number} [expoente=2] - O expoente ao qual a base será elevada. Valor padrão é 2.
 * @returns {number} O resultado da potenciação.
 */
function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }
    return resultado;
} // Nota: Argumentos extras passados para a função são ignorados.

console.log('potencia():', potencia()); // Saída: NaN (base é undefined, expoente é 2)
console.log('potencia(4):', potencia(4)); // Saída: 16 (base é 4, expoente padrão é 2)
console.log('potencia(2, 6):', potencia(2, 6)); // Saída: 64 (base é 2, expoente é 6)
console.log('potencia(2, 6, 18):', potencia(2, 6, 18)); // Saída: 64 (o argumento extra 18 é ignorado)
