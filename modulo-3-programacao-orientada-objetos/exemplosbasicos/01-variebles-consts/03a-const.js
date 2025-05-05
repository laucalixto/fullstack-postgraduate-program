/**
 * @file 03a-const.js
 * @brief Demonstra o escopo de bloco e a imutabilidade da *referência* de `const`.
 * Variáveis `const` têm escopo de bloco, similar a `let`.
 * Uma vez atribuído um valor a uma `const`, ela não pode ser reatribuída.
 * Tentar acessar uma `const` fora de seu escopo causa erro.
 */

/**
 * Testa o escopo e a reatribuição de `const`.
 * `const01` é definida na função. `const02` é definida no bloco.
 * Tentar reatribuir `const01` causa erro (comentado).
 * Tentar acessar `const02` fora do bloco causa erro (não comentado, mas causaria).
 */
function testConst() {
    const const01 = 'const 01';
    {
        const const02 = 'const 02'; // `const` diferente, no escopo do bloco
        console.log('01a.', const01); // Acessível: const01 do escopo da função
        console.log('01b.', const02); // Acessível: const02 do escopo do bloco
    }
    // A linha abaixo causaria um erro: TypeError: Assignment to constant variable.
    // const const01 = 'novo valor';
    console.log('02a.', const01); // Acessível: const01 do escopo da função
    // A linha abaixo causaria um erro: ReferenceError: const02 is not defined
    console.log('02b.', const02); // Erro! const02 só existe dentro do bloco
}

testConst();
