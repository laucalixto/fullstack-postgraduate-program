/**
 * @file 03b-closure.js
 * @brief Exemplo prático de closure: criação de contadores independentes.
 * Cada chamada a `criarContador` gera uma nova closure, com sua própria
 * variável `contador` privada e isolada.
 */

/**
 * Função fábrica que cria e retorna uma função contadora.
 * @returns {function(): number} Uma nova função que incrementa e retorna um contador privado.
 */
function criarContador() {
    // Esta variável 'contador' pertence ao escopo da função 'criarContador'. // Ela é "fechada" (closed over) pela função interna 'incrementar'.
    let contador = 0;

    /**
     * Função interna que será retornada.
     * Ela tem acesso à variável 'contador' da função externa 'criarContador' (closure).
     * @returns {number} O valor atualizado do contador.
     */
    function incrementar() {
        contador++;
        console.log('Contador agora é:', contador);
        return contador;
    }

    // Retornamos a função interna.
    // Quem chamar 'criarContador' receberá uma instância da função 'incrementar',
    // cada uma com seu próprio escopo de 'contador'.
    return incrementar;
}

// --- Como usar ---

// Criamos um primeiro contador. Ele terá sua própria variável 'contador' privada.
const meuContador1 = criarContador();

// Criamos um segundo contador. Ele também terá sua própria variável 'contador' privada e independente.
const meuContador2 = criarContador();

// Chamamos o primeiro contador algumas vezes.
console.log('--- Contador 1 ---');
meuContador1(); // Saída: Contador agora é: 1
meuContador1(); // Saída: Contador agora é: 2

// Chamamos o segundo contador. Veja que ele começa do zero, independente do primeiro.
console.log('--- Contador 2 ---');
meuContador2(); // Saída: Contador agora é: 1

// Chamando o primeiro novamente, ele continua de onde parou.
console.log('--- Contador 1 de novo ---');
meuContador1(); // Saída: Contador agora é: 3
