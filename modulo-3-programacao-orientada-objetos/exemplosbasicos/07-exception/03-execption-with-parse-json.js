/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/07-exception/03-execption-with-parse-json.js
 * @brief Demonstra o tratamento específico de erros ao usar `JSON.parse()`.
 * Captura `SyntaxError` que pode ser lançado por `JSON.parse` e relança outros tipos de erro.
 */

// String JSON inválida.
let json = 'incorreto';
// String JSON válida.
let json2 = '{"nome":"correto"}';

try {
    // Tenta fazer o parse da string JSON inválida. Isso lançará um SyntaxError.
    let pessoa = JSON.parse(json);
    console.log(pessoa.nome);
} catch (err) {
    // Verifica se o erro capturado é uma instância de SyntaxError.
    if (err instanceof SyntaxError) {
        // Se for, imprime uma mensagem específica para esse tipo de erro.
        console.log(`Erro ${err.name}: ${err.message}`);
    } else {
        // Se for outro tipo de erro, relança-o, pois este bloco catch não sabe como tratá-lo.
        console.log('Relança a exceção pois não sabe como tratar');
        throw err;
    }
} finally {
    console.log('Encerra tratamento');
}

console.log('-----------------');

try {
    let pessoa = JSON.parse(json2);
    console.log(pessoa.nome);
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log(`Erro ${err.name}: ${err.message}`);
    } else {
        console.log('Relança a exceção pois não sabe como tratar');
        throw err;
    }
} finally {
    console.log('Encerra tratamento');
}
