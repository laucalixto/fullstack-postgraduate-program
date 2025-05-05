/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/08-async/03a-simple-async.js
 * @brief Demonstra a declaração de uma função `async` e o uso de `await`.
 * Funções `async` sempre retornam uma Promise.
 * O `await` pausa a execução da função `async` até que a Promise à direita seja resolvida.
 */

/**
 * Função assíncrona que simula uma operação demorada.
 * @returns {Promise<string>} Uma Promise que eventualmente resolve com a string 'Pedido atendido'.
 */
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Pedido atendido'), 2000);
    });

    // 'await' pausa a execução de 'fazAlgo' aqui por 2 segundos.
    // Quando a 'promise' resolve, seu valor ('Pedido atendido') é atribuído a 'resultado'.
    let resultado = await promise;

    // O valor retornado por uma função async é implicitamente embrulhado em uma Promise resolvida.
    return resultado;
}

console.log('Iniciando o programa');
// Chamar 'fazAlgo()' inicia a execução, mas como ela é async, ela retorna
// uma Promise imediatamente (antes do await completar).
// O console.log imprime o objeto Promise (geralmente "[object Promise]" ou similar),
// não o valor resolvido 'Pedido atendido'.
console.log(fazAlgo());
console.log('Finalizando o programa');
