/**
 * @file 02b-funcao-como-parametro.js
 * @brief Demonstra o uso de funções anônimas (function expressions) passadas diretamente como argumentos (callbacks).
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
}
// Chama 'decision' passando funções anônimas diretamente como argumentos. decision( 'OK',
decision(
    'Cancel',
    function () {
        console.log('You agreed.');
    },
    function () {
        console.log('You canceled the execution.');
    },
);
