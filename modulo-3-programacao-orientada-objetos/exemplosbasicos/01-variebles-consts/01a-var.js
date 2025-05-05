/**
 * @file 01a-var.js
 * @brief Demonstra o escopo de função da palavra-chave `var`.
 * Variáveis declaradas com `var` dentro de uma função são acessíveis
 * em qualquer lugar dentro dessa função, mesmo dentro de blocos `{}`.
 */

/**
 * Testa o escopo da variável `var`.
 * Declara `var01` no escopo da função e `var02` dentro de um bloco.
 * Ambas são acessíveis após o bloco, dentro da função.
 */
function testVar() {
    var var01 = 'var 01';
    {
        var var02 = 'var 02';
        console.log('01a.', var01); // Acessível: var01 tem escopo de função
        console.log('01b.', var02); // Acessível: var02 tem escopo de função
    }
    console.log('02a.', var01); // Acessível: var01 tem escopo de função
    console.log('02b.', var02); // Acessível: var02 foi declarada com var, então tem escopo de função
}

// Chama a função para executar o teste
testVar();
