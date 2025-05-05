/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/07-exception/02-create-exception.js
 * @brief Demonstra a criação e o lançamento de uma classe de erro personalizada em JavaScript.
 */

/**
 * Classe de erro personalizada que herda da classe base `Error`.
 * Usada para representar erros específicos de validação.
 * @extends Error
 */
class ValidationError extends Error {
    /**
     * Cria uma instância de ValidationError.
     * @param {string} message - A mensagem descritiva do erro.
     */
    constructor(message) {
        super(message); // construtor da superclasse
        this.name = 'ValidationError'; // alterando propriedade padrão de Error
    }
}

/**
 * Função que sempre lança um erro do tipo ValidationError.
 */
function vaiDarErro() {
    throw new ValidationError('Dados inválidos!');
}

try {
    // Chama a função que pode lançar o erro.
    vaiDarErro();
} catch (e) {
    // Captura o erro e imprime suas propriedades 'name' e 'message'.
    console.error(`${e.name}: ${e.message}`);
}
