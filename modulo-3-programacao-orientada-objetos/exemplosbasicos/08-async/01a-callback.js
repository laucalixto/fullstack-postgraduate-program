/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/08-async/01a-callback.js
 * @brief Demonstra o uso de callbacks para operações assíncronas em Node.js (leitura de arquivo).
 * O padrão de callback "error-first" é comumente usado em APIs Node.js.
 */

// Importa o módulo 'fs' (File System) do Node.js para interagir com arquivos.
const fs = require('fs');

/**
 * Função de callback que será executada após a tentativa de leitura do arquivo.
 * @param {Error|null} err - Objeto de erro se a operação falhar, ou null se for bem-sucedida.
 * @param {Buffer|null} buf - Buffer com o conteúdo do arquivo se a operação for bem-sucedida, ou null se falhar.
 */
const onRead = function onRead(err, buf) {
    if (err) console.log('houve um erro');
    else console.log(buf.toString());
};

// Chama a função assíncrona 'readFile'.
// Ela tentará ler o arquivo '01a-texto.txt'.
// Quando a operação terminar (com sucesso ou erro), a função 'onRead' será chamada.
fs.readFile('01a-texto.txt', onRead);
