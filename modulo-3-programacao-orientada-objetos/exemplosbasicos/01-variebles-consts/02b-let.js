/**
 * @file 02b-let.js
 * @brief Demonstra o erro ao tentar acessar uma variável `let` fora de seu escopo de bloco.
 */

/**
 * Testa o acesso a uma variável `let` fora de seu bloco.
 * `let02` é definida dentro do bloco `{}`. A tentativa de acessá-la
 * fora do bloco resultará em um ReferenceError.
 */
function testLet() {
    let let01 = 'let 01';
    {
        let let02 = 'let 02';
        console.log('01a.', let01); // OK: Acessando let01 do escopo externo
        console.log('01b.', let02); // OK: Acessando let02 do escopo do bloco
    }

    console.log('02a.', let01); // OK: Acessando let01 do escopo da função
    // A linha abaixo causará um erro em tempo de execução: ReferenceError: let02 is not defined
    // porque let02 só existe dentro do bloco acima.
    console.log('02b.', let02); //<-- gera erro
}

testLet();
