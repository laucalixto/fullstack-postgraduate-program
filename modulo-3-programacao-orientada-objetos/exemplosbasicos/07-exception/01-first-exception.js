/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/07-exception/01-first-exception.js
 * @brief Demonstra o tratamento básico de exceções em JavaScript usando `try...catch...finally`.
 */

try {
    // Força o lançamento de um erro genérico.
    throw new Error('Gerando um erro genérico!');
} catch (e) {
    // Captura o erro lançado no bloco 'try'.
    // 'e' contém o objeto de erro (neste caso, uma instância de Error).
    // Imprime o nome e a mensagem do erro no console de erro.
    console.error(`${e.name}: ${e.message}`);
} finally {
    // O bloco 'finally' é executado sempre, ocorrendo erro ou não.
    // É útil para limpeza de recursos (ex: fechar arquivos, conexões).
    console.log('Imprime mesmo com o erro. "finally" não é obrigatório!');
}
