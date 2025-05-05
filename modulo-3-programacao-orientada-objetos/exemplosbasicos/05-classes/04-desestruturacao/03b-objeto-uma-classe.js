/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/05-classes/04-desestruturacao/03b-objeto-uma-classe.js
 * @brief Demonstra a desestruturação de um objeto instanciado a partir de uma classe.
 * Extrai tanto métodos quanto atributos públicos do objeto.
 */

// Importa a classe definida no outro arquivo.
import { UmaClasse } from './03a-uma-classe.js';

// Cria uma instância da classe.
let umaClasse = new UmaClasse('Primeiro atributo');

// Desestrutura o objeto 'umaClasse':
// - Extrai o método 'capturaPrimeiroAtributo' e o renomeia para 'umAtributo'.
//   Nota: 'umAtributo' agora contém a *referência* para a função, não o resultado dela.
// - Extrai o atributo público 'outroAtributo'.
let { capturaPrimeiroAtributo: umAtributo, outroAtributo } = umaClasse;

console.log('um Atributo (referência da função): ' + umAtributo); // Imprime a representação string da função
//console.log('Resultado da função: ' + umAtributo()); // Não chama a função extraída para obter o valor, causa um erro.
console.log('Outro Atributo: ' + outroAtributo);
