/**
 * @file 04-arrow-functions.js
 * @brief Demonstra diferentes sintaxes e usos de Arrow Functions em JavaScript.
 * Arrow functions oferecem uma sintaxe mais concisa para escrever funções.
 */

// 1. Arrow function sem parâmetros.
// Os parênteses são obrigatórios quando não há parâmetros.
const semParametro = () => console.log('função sem parametros');
semParametro();
semParametro(1); // Argumentos extras são ignorados silenciosamente.

// 2. Arrow function com um único parâmetro.
// Os parênteses ao redor do parâmetro são opcionais.
// Usar `_` é uma convenção para indicar que o parâmetro não será usado.
const useUnderscore = (_) => console.log('usando underscore');
useUnderscore();

// 3. Arrow function com múltiplos parâmetros e retorno implícito.
// Os parênteses são obrigatórios para múltiplos parâmetros.
// Se o corpo da função é apenas uma expressão, o `return` é implícito.
const somar = (x, y) => x + y;
console.log('somar(1, 2):', somar(1, 2)); // Saída: 3

// 4. Arrow function com múltiplos parâmetros e corpo de bloco (retorno explícito).
// Se o corpo da função requer múltiplas linhas ou lógica mais complexa,
// usa-se chaves `{}` e a palavra-chave `return` explícita.
const somarAlt = (x, y) => {
    return x + y;
};
console.log('somarAlt(3, 4):', somarAlt(3, 4)); // Saída: 7

// 5. Arrow function com operador ternário para retorno conciso.
// Retorna o maior entre dois números usando um ternário.
const compararMaior = (x, y) => (x > y ? x : y);
console.log('compararMaior(5, 6):', compararMaior(5, 6)); // Saída: 6

// 6. Arrow function com corpo de bloco e lógica condicional.
// Mesma funcionalidade do exemplo 5, mas com `if` explícito e `return`.
const compararMaiorAlt = (x, y) => {
    if (x > y) return x;
    return y;
};
console.log('compararMaiorAlt(7, 8):', compararMaiorAlt(7, 8)); // Saída: 8
