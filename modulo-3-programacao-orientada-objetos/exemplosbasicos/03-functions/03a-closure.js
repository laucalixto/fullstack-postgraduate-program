/**
 * @file 03a-closure.js
 * @brief Exemplo simples de closure em JavaScript.
 * Uma closure ocorre quando uma função interna tem acesso às variáveis
 * de sua função externa (escopo léxico), mesmo depois que a função externa
 * já terminou sua execução.
 */

/**
 * Função externa que recebe um valor `x` e retorna uma nova função.
 * A função interna retornada "lembra" o valor de `x`.
 * @param {number} x - O primeiro número a ser somado.
 * @returns {function(number): number} Uma função que recebe `y` e retorna `x + y`.
 */
function somaValores(x) {
    return function (y) {
        return x + y;
    };
}

// Cria uma nova função 'soma5' que sempre somará 5 ao seu argumento.
// A função interna retornada por somaValores(5) "fecha" (closes over) a variável x com o valor 5.
var soma5 = somaValores(5);

console.log('soma5(2):', soma5(2)); // Saída: 7 (5 + 2)
