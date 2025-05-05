/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/06-JSON/02-parse/01-parse-objeto.js
 * @brief Demonstra a conversão de uma string JSON para um objeto JavaScript usando `JSON.parse()`.
 */

// String contendo dados no formato JSON.
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// Converte a string JSON 'user' de volta para um objeto JavaScript.
user = JSON.parse(user);

// Acessa propriedades do objeto resultante.
console.log(user.friends);
console.log(user.friends[0]);
