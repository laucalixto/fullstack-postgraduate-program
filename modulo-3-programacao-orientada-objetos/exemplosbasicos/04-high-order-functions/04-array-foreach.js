/**
 * @file 04-array-foreach.js
 * @brief Demonstra o uso do método `Array.forEach()` para executar uma função callback
 * para cada elemento do array.
 * `forEach` é usado principalmente para efeitos colaterais (como imprimir no console)
 * e não retorna um novo array (retorna `undefined`).
 */

/**
 * Array de números para os exemplos.
 * @type {number[]}
 */
const array = [4, 5, 6, 7, 8, 9, 10];

// Exemplo 1: Usando forEach para imprimir se cada número é par ou ímpar.
console.log('Verificando paridade com forEach:');
array.forEach((numbers) => console.log(numbers + ' -> ' + (numbers % 2 == 0 ? 'par' : 'ímpar')));

/**
 * Função auxiliar que calcula o número de divisores de um determinado número.
 * @param {number} item - O número para o qual contar os divisores.
 * @returns {number} O número total de divisores (incluindo 1 e o próprio número).
 */
const dividersNumber = (item) => {
    let divNumbs = 0;
    if (item < 1) return 0; // Trata números não positivos se necessário
    for (let divisor = 1; divisor <= item; divisor++) {
        if (item % divisor == 0) divNumbs++;
    }
    return divNumbs;
};

// Segundo forEach: Conta e exibe o número de divisores para cada número
console.log('\nContando divisores com forEach:');
array.forEach((numbers) => console.log(numbers + `-> número de divisores de ${numbers} = ` + dividersNumber(numbers)));
