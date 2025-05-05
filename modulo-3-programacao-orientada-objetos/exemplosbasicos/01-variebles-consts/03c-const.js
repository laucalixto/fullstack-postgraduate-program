/**
 * @file 03c-const.js
 * @brief Demonstra o erro ao tentar reatribuir uma `const` a um novo objeto.
 * `const` impede que a variável receba uma nova referência após a inicialização.
 */

/**
 * Testa a tentativa de reatribuição de uma `const` que referencia um objeto.
 */
function testConst() {
    const const01 = { propriedade: 'valor' };
    console.log('01a.', const01.propriedade); // Saída: valor
    // A linha abaixo causará um erro: TypeError: Assignment to constant variable.
    // Não é permitido fazer const01 apontar para um objeto diferente.
    const01 = { propriedade: 'novo valor' };
    // Esta linha não será alcançada devido ao erro anterior.
    console.log('01b.', const01.propriedade);
}

testConst();
