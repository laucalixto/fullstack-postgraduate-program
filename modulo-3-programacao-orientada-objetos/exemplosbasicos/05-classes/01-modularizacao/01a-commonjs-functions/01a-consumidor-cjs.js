/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/classes/01-modularizacao/01a-commonjs-functions/01a-consumidor-cjs.js
 * @brief Demonstra como consumir (importar) um módulo CommonJS em Node.js.
 *
 * Este script utiliza a função `require` para importar as funções exportadas
 * pelo módulo `./01a-definicao-cjs.js`. Ele mostra duas formas de acessar
 * as funções importadas: através do objeto do módulo e usando desestruturação.
 */

// Importa o módulo inteiro. As funções exportadas ficam disponíveis como propriedades do objeto 'circulo'.
const circulo = require('./01a-definicao-cjs.js');
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);

// Importa o módulo e extrai (desestrutura) a função 'area' diretamente para uma variável local.
const { area } = require('./01a-definicao-cjs.js');
console.log(`Área do círculo de raio 2 é ${area(2)}`);
