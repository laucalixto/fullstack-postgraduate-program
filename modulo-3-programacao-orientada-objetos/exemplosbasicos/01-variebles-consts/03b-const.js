/**
 * @file 03b-const.js
 * @brief Demonstra que `const` torna a *referência* imutável, não o *conteúdo* do objeto.
 * Se uma `const` armazena um objeto, as propriedades desse objeto podem ser modificadas.
 * O que não pode ser feito é atribuir um *novo* objeto à mesma constante.
 */

/**
 * Testa a modificação de propriedades de um objeto atribuído a uma `const`.
 */
function testConst() {
    const const01 = { propriedade: 'valor' };
    console.log('01a.', const01.propriedade); // Saída: valor
    // É permitido modificar as propriedades do objeto referenciado por const01
    const01.propriedade = 'novo valor';
    console.log('01b.', const01.propriedade); // Saída: novo valor
}

testConst();
