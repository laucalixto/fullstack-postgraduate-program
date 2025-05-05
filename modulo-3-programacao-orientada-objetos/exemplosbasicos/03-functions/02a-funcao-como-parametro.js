/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/03-functions/02a-funcao-como-parametro.js
 * @brief Demonstra o conceito de "Higher-Order Functions" passando funções nomeadas como argumentos (callbacks).
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
        doOK(); // Chama a função passada como doOK
        return;
    }
    doCancel(); // Chama a função passada como doCancel
}

/**
 * Função callback para o caso 'OK'.
 */
function showOk() {
    console.log('You agreed.');
}

/**
 * Função callback para o caso 'Cancel'.
 */
function showCancel() {
    console.log('You canceled the execution.');
}

// Chama 'decision' passando as funções nomeadas como callbacks.
decision('OK', showOk, showCancel);
decision('Cancel', showOk, showCancel);
