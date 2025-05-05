/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/06-JSON/01-stringfy/02-objeto-classe-to-json.js
 * @brief Demonstra a conversão de um objeto instanciado de uma classe para JSON.
 * Por padrão, `JSON.stringify()` serializa apenas as propriedades públicas enumeráveis do objeto.
 * Atributos privados (#) e métodos não são incluídos no JSON resultante.
 */

// Importa a classe de outro módulo.
import { UmaClasse } from '../../05-classes/04-desestruturacao/03a-uma-classe.js';

// Cria uma instância da classe.
let umObjetoDeClasse = new UmaClasse('um valor');
// Converte a instância para JSON. Apenas o atributo público 'outroAtributo' será incluído.
let json = JSON.stringify(umObjetoDeClasse);
// Imprime a string JSON resultante.
// Saída: {"outroAtributo":"atributo dois"}
console.log(json);
