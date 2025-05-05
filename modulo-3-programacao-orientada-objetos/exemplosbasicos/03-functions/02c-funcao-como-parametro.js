/**
 * @file 02c-funcao-como-parametro.js
 * @brief Demonstra o uso de function expressions (funções atribuídas a variáveis) passadas como argumentos (callbacks).
 */

/**
 * Função de ordem superior que executa uma de duas funções (callbacks)
 * dependendo do valor de uma pergunta.
 * @param {string} question - A condição para decidir qual callback executar ('OK' ou outro valor).
 * @param {function} doOK - A função a ser chamada se a condição for 'OK'.
 * @param {function} doCancel - A função a ser chamada caso contrário.
 */
function decision(question, doOK, doCancel) {
    if (question == 'OK') {
        doOK();
        return;
    }
    doCancel();
} // Define a função callback para 'OK' usando uma function expression atribuída a uma variável.

/**
 * Função callback para o caso 'OK', definida como uma function expression.
 */
let beOK = function showOk() {
    console.log('You agreed.');
};

/**
 * Função callback para o caso 'Cancel', definida como uma function expression.
 */
let beCancel = function showCancel() {
    console.log('You canceled the execution.');
};

// Chama 'decision' passando as variáveis que contêm as function expressions como callbacks.
decision('OK', beOK, beCancel);
decision('Cancel', beOK, beCancel);
