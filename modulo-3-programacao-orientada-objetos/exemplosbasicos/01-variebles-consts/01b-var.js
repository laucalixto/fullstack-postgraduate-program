/**
 * @file 01b-var.js
 * @brief Demonstra o escopo de função de `var`, mesmo dentro de condicionais.
 * Variáveis declaradas com `var` dentro de um bloco `if` (ou qualquer bloco)
 * são "elevadas" (hoisted) para o escopo da função, mesmo que o bloco
 * nunca seja executado. No entanto, a *atribuição* só ocorre se o bloco for executado.
 */

/**
 * Testa o escopo de `var` dentro de um `if` que nunca é executado.
 * `var02` é declarada dentro do `if`, mas ainda existe no escopo da função (com valor `undefined`).
 */
function testVar() {
    var var01 = 'var 01';
    if (1 == 0) {
        // Esta condição é sempre falsa
        var var02 = 'var 02';
        console.log('01a.', var01);
        console.log('01b.', var02);
    }
    console.log('02a.', var01); // Acessível: 'var 01'
    console.log('02b.', var02); // Acessível, mas `undefined` porque a atribuição dentro do `if` nunca ocorreu.
}

// Chama a função para executar o teste
testVar();
