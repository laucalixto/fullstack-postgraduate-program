/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/08-async/03b-simple-async.js
 * @brief Demonstra como consumir o valor resolvido de uma função `async` usando `.then()`.
 * Como funções `async` retornam Promises, podemos usar `.then()` para acessar o resultado.
 */

/**
 * Função assíncrona que simula uma operação demorada.
 * @returns {Promise<string>} Uma Promise que eventualmente resolve com a string 'Pedido atendido'.
 */
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Pedido atendido'), 2000);
    });

    // Pausa a execução aqui até a Promise resolver.
    let resultado = await promise;

    return resultado;
}

console.log('Iniciando o programa');
// Chama a função async 'fazAlgo()'. Como ela retorna uma Promise,
// anexamos um callback '.then()' para ser executado quando a Promise resolver.
// O callback recebe o valor resolvido ('Pedido atendido') como argumento 'msg'.
fazAlgo().then((msg) => console.log(msg));
console.log('Finalizando o programa');
