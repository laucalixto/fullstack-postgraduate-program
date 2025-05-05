/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/05-classes/04-desestruturacao/03a-uma-classe.js
 * @brief Define uma classe simples `UmaClasse` com um atributo privado e um público.
 * Esta classe será usada para demonstrar a desestruturação de objetos de classe.
 */

export class UmaClasse {
    /** @private Atributo privado da classe. */
    #_umAtributo;
    /** Atributo público da classe, inicializado diretamente. */
    outroAtributo = 'atributo dois';

    /**
     * Cria uma instância de UmaClasse.
     * @param {*} n - O valor inicial para o atributo privado.
     */
    constructor(n) {
        this.#_umAtributo = n;
    }

    /**
     * Método público para acessar o valor do atributo privado.
     * @returns {*} O valor do atributo privado `#_umAtributo`.
     */
    capturaPrimeiroAtributo() {
        return this.#_umAtributo;
    }
}
