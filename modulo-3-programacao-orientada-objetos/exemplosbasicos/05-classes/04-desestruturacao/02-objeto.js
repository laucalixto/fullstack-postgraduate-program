/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/05-classes/04-desestruturacao/02-objeto.js
 * @brief Demonstra a desestruturação de objetos em JavaScript.
 * Mostra como extrair propriedades, renomear variáveis durante a desestruturação
 * e definir valores padrão para propriedades inexistentes.
 */

// Objeto original.
let pessoa = { nome: 'Laurindo Calixto', idade: 44 };

// Desestruturação do objeto:
// - Extrai 'idade' e renomeia para 'aIdade'.
// - Extrai 'nome' para uma variável 'nome'.
// - Tenta extrair 'peso', mas como não existe, usa o valor padrão 95 e atribui à variável 'oPeso'.
let { idade: aIdade, nome, peso: oPeso = 95 } = pessoa;

console.log('O nome é: ' + nome);
console.log('A idade é: ' + aIdade);
console.log('O peso é: ' + oPeso); // Saída: 95 (valor padrão)
