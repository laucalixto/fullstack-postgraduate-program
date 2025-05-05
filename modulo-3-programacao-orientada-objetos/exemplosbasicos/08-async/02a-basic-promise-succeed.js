/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/08-async/02a-basic-promise-succeed.js
 * @brief Demonstra a criação e o consumo básico de uma Promise que resolve com sucesso.
 */

// Cria uma nova Promise.
// A função executor recebe duas funções como argumentos: resolve e reject.
const myFirstPromise = new Promise((resolve, reject) => {
    // Simula uma operação assíncrona (ex: chamada de API, timer) que leva 2 segundos.
    setTimeout(() => {
        // Após 2 segundos, chama 'resolve' para indicar que a Promise foi cumprida com sucesso,
        // passando a mensagem 'Successo!' como valor resultante.
        resolve('Successo!');
    }, 2000);
});

// Anexa um callback à Promise usando o método '.then()'.
// Este callback será executado QUANDO a Promise for resolvida (quando 'resolve' for chamado).
// O argumento 'successMessage' receberá o valor passado para 'resolve' ('Successo!').
myFirstPromise.then((successMessage) => {
    console.log(`Finalizado! ${successMessage}`);
});

// Esta linha é executada imediatamente, ANTES da Promise ser resolvida.
console.log('Fim do programa');
