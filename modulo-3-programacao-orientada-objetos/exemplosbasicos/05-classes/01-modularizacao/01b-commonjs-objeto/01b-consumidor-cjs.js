/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/05-classes/01-modularizacao/01b-commonjs-objeto/01b-consumidor-cjs.js
 * @brief Demonstra como consumir uma classe exportada via CommonJS (`module.exports`).
 * Importa a classe `Circulo` e cria uma instância para usar seus métodos.
 */

// Importa a classe 'Circulo' exportada pelo módulo.
const Circulo = require('./01b-definicao-cjs.js');
// Cria uma nova instância da classe Circulo com raio 4.
const c1 = new Circulo(4);
// Chama o método 'area()' da instância e imprime o resultado.
console.log(`Área do círculo de raio 4 é ${c1.area()}.`);
