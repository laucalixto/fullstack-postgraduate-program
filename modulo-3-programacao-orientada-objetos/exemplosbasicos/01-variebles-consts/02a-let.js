/**
 * @file 02a-let.js
 * @brief Demonstra o escopo de bloco da palavra-chave `let`.
 * Variáveis declaradas com `let` têm escopo restrito ao bloco (`{}`)
 * onde foram definidas.
 */

/**
 * Testa o escopo de bloco de `let`.
 * `let01` é definida no escopo da função.
 * `let02` é definida dentro de um bloco e só é acessível dentro dele.
 */
function testLet() {
    let let01 = 'let 01';
    {
        let let02 = 'let 02';
        console.log('01a.', let01); // Acessível: let01 está no escopo externo (função)
        console.log('01b.', let02); // Acessível: let02 está no escopo atual (bloco)
    }
    console.log('02a.', let01); // Acessível: let01 está no escopo atual (função)
    // console.log('02b.', let02); // Erro! let02 não está definida neste escopo.
}

testLet();
