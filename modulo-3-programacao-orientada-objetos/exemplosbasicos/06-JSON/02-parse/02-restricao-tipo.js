/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/06-JSON/02-parse/02-restricao-tipo.js
 * @brief Demonstra o uso da função `reviver` (segundo argumento) em `JSON.parse()`
 * para transformar valores durante o processo de parsing.
 * Neste exemplo, converte a string de data 'birth' em um objeto `Date`.
 */

// String JSON com uma data como string no formato ISO 8601.
const json = '{ "name":"John Doe", "birth":"2017-11-30T12:00:00.000Z", "city":"Porto Alegre"}';

// Usa JSON.parse com uma função 'reviver'.
// A função reviver é chamada para cada par chave/valor no objeto resultante.
let obj = JSON.parse(json, function (key, value) {
    // Se a chave for 'birth', cria um novo objeto Date a partir do valor.
    if (key == 'birth') {
        return new Date(value);
    }
    // Para todas as outras chaves, retorna o valor original.
    return value;
});

// Agora, obj.birth é um objeto Date, não mais uma string.
console.log('Nome:  ' + obj.name);
console.log('DNasc: ' + obj.birth); // Imprime a representação string do objeto Date
console.log('Tipo de birth:', typeof obj.birth); // Saída: object
console.log('É instância de Date?', obj.birth instanceof Date); // Saída: true
