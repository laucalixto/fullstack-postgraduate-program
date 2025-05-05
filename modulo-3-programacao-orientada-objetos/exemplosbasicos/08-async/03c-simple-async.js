/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/08-async/03c-simple-async.js
 * @brief Demonstra o uso de `await` dentro de uma função `async` para esperar a resolução de outra função `async`.
 */

/**
 * Função assíncrona que simula uma operação demorada (ex: chamada de API).
 * Cria uma Promise que resolve após 2 segundos com a mensagem 'Pedido atendido'.
 * A palavra-chave `await` pausa a execução de `fazAlgo` até que a Promise seja resolvida.
 * @returns {Promise<string>} Uma Promise que resolve com a string 'Pedido atendido'.
 */
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Pedido atendido'), 2000);
    });

    // Pausa a execução aqui até que a 'promise' seja resolvida.
    let resultado = await promise;

    return resultado;
}

/**
 * Função principal assíncrona que orquestra a execução.
 * Usa `await` para esperar que a função `fazAlgo` complete antes de continuar.
 * Isso garante que as mensagens sejam impressas na ordem correta.
 */
async function main() {
    console.log('Iniciando o programa');
    // Pausa a execução aqui até que fazAlgo() retorne o valor resolvido.
    console.log(await fazAlgo());
    console.log('Finalizando o programa');
}

// Chama a função principal para iniciar a execução.
main();
