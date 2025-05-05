/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/05-classes/02-classe-simples/frentista.js
 * @brief Simula a interação de um frentista abastecendo um carro.
 * Demonstra a criação de uma instância da classe `Carro` e o uso
 * do método `abastecer` e dos getters `tanque` e `capacidadeDoTanque`.
 */

import { Carro } from './carro.js';

// Cria uma instância da classe Carro com capacidade de 55.
let carro = new Carro(55);
console.log('Capacidade do Tanque:', carro.capacidadeDoTanque); // Saída: 55
console.log('Tanque Inicial:', carro.tanque); // Saída: 0

// Abastece o carro gradualmente.
carro.abastecer(10);
console.log('Após abastecer 10:', carro.tanque); // Saída: 10

carro.abastecer(10);
console.log('Após abastecer 10:', carro.tanque); // Saída: 20

carro.abastecer(10);
console.log('Após abastecer 10:', carro.tanque); // Saída: 30

carro.abastecer(10);
console.log('Após abastecer 10:', carro.tanque); // Saída: 40

carro.abastecer(10);
console.log('Após abastecer 10:', carro.tanque); // Saída: 50

// Tenta abastecer mais 30, mas o tanque só comporta mais 5.
carro.abastecer(30);
console.log('Após tentar abastecer 30:', carro.tanque); // Saída: 55 (limitado pela capacidade)

// Tenta abastecer novamente, mas o tanque já está cheio.
carro.abastecer(30);
console.log('Após tentar abastecer 30 (tanque cheio):', carro.tanque); // Saída: 55
