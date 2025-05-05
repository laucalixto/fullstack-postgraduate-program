/**
 * @file 01a-sem-parametro.js
 * @brief Demonstra funções sem parâmetros e a diferença entre retornar e não retornar um valor.
 */

/**
 * Função que imprime uma mensagem no console, mas não retorna nenhum valor explícito.
 * Em JavaScript, funções sem `return` explícito retornam `undefined` por padrão.
 */
function funcaoSemRetorno() {
    console.log('Hello World!');
}

/**
 * Função que retorna explicitamente a string 'Hello World!'.
 * @returns {string} A string 'Hello World!'.
 */
function funcaoComReturn() {
    return 'Hello World!';
}

// Chama a função sem retorno e armazena o resultado (que será undefined)
let msg = funcaoSemRetorno();
console.log('Resultado da funcaoSemRetorno:', msg); // Saída: undefined

// Chama a função com retorno e armazena o resultado
msg = funcaoComReturn();
console.log('Resultado da funcaoComReturn:', msg); // Saída: Hello World!
