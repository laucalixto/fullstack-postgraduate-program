/**
 * @file 01c-var.js
 * @brief Demonstra a re-declaração e o hoisting com `var`.
 * Variáveis `var` podem ser re-declaradas no mesmo escopo sem erro.
 * A declaração é "elevada" (hoisted), mas a inicialização não.
 */

/**
 * Testa a re-declaração e o comportamento de `var` em diferentes escopos (aparentes).
 * Mostra como `var` não respeita escopo de bloco e pode ser re-declarada.
 */
function testVar() {
    var var01 = 'var 01';
    {
        // Neste ponto, var01 é 'var 01'
        console.log('01a.', var01); // Saída: var 01
        // Re-declarar var01 dentro do bloco não cria uma nova variável,
        // apenas reafirma a variável do escopo da função.
        var var01 = 'var 02';
        console.log('02a.', var01); // Saída: var 02
    }
    var var01 = 'var 03'; // Re-declara e reatribui a mesma variável var01
    console.log('03a.', var01); // Saída: var 03
}

testVar();
