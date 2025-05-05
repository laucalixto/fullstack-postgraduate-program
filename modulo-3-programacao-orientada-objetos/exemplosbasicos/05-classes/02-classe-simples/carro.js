/**
 * @file carro.js
 * @brief Define a classe base `Carro` para representar um veículo com tanque de combustível.
 * Utiliza campos privados (`#`) para encapsular o estado interno.
 */

export class Carro {
    /** @private Nível atual de combustível no tanque. */
    #tanque;
    /** @private Capacidade máxima do tanque de combustível. */
    #capacidadeDoTanque;

    /**
     * Cria uma nova instância de Carro.
     * @param {number} valor - A capacidade do tanque de combustível.
     */
    constructor(valor) {
        this.#tanque = 0;
        this.#capacidadeDoTanque = valor;
    }

    /**
     * Obtém o nível atual de combustível no tanque.
     * @returns {number} O nível atual do tanque.
     */
    get tanque() {
        return this.#tanque;
    }
    /**
     * Obtém a capacidade máxima do tanque.
     * @returns {number} A capacidade do tanque.
     */
    get capacidadeDoTanque() {
        return this.#capacidadeDoTanque;
    }
    /**
     * Abastece o tanque do carro com uma determinada quantidade de combustível.
     * @param {number} qtde - A quantidade de combustível a ser adicionada. Não pode ser negativa.
     * O nível do tanque não excederá a capacidade máxima.
     */
    abastecer(qtde) {
        if (qtde >= 0) {
            this.#tanque += qtde;
            if (this.#tanque > this.#capacidadeDoTanque) {
                this.#tanque = this.#capacidadeDoTanque;
            }
        }
    }
}
