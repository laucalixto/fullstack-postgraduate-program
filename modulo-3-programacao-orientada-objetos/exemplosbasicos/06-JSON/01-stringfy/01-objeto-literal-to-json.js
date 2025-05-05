/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/06-JSON/01-stringfy/01-objeto-literal-to-json.js
 * @brief Demonstra a conversão de um objeto literal JavaScript para uma string JSON usando `JSON.stringify()`.
 */

// Objeto literal JavaScript com diferentes tipos de dados.
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
}; // Converte o objeto 'student' para uma string no formato JSON.
let json = JSON.stringify(student);

// Imprime a string JSON resultante.
// Saída: {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
console.log(json);
