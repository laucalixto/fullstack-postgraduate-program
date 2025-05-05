/**
 * @file 02c-let.js
 * @brief Demonstra o sombreamento (shadowing) e a Temporal Dead Zone (TDZ) com `let`.
 * `let` permite declarar uma variável com o mesmo nome em um escopo interno,
 * "sombreando" a variável do escopo externo.
 * Tentar acessar uma variável `let` antes de sua declaração no mesmo escopo
 * causa um ReferenceError devido à TDZ.
 */

/**
 * Testa o sombreamento e a TDZ com `let`.
 * Declara `let01` na função. Dentro do bloco, declara outra `let01`,
 * sombreando a externa. Mostra o erro da TDZ.
 */
function testLet() {
    let let01 = 'let 01';
    {
        // A linha abaixo causaria um erro: ReferenceError: Cannot access 'let01' before initialization
        // Isso ocorre por causa da Temporal Dead Zone (TDZ). O `let01` interno existe, mas não pode ser acessado antes da sua linha de declaração.
        // console.log('01a.', let01); //<-- gera erro
        let let01 = 'let 02';
        console.log('02a.', let01); // Saída: let 02 (acessa o let01 interno, do bloco)
    }
    console.log('03a.', let01); // Saída: let 01 (acessa o let01 externo, da função)
}

testLet();
