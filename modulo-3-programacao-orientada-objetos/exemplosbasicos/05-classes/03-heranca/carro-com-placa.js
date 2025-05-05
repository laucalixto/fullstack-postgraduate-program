/**
 * @file carro-com-placa.js
 * @brief Define a classe `CarroComPlaca` que herda de `Carro` e adiciona uma placa.
 */

import { Carro } from '../02-classe-simples/carro.js';

/**
 * Representa um carro que possui uma placa, estendendo a funcionalidade da classe `Carro`.
 * @extends Carro
 */
export class CarroComPlaca extends Carro {
    /** @private A placa do carro. */
    #placa;
    /**
     * Cria uma nova instância de CarroComPlaca.
     * @param {string} placa - A placa do carro.
     * @param {number} [capacidade=55] - A capacidade do tanque de combustível (padrão 55).
     */
    constructor(placa, capacidade = 55) {
        super(capacidade); // Chama o construtor da classe pai (Carro)
        this.#placa = placa;
    }
    /**
     * Obtém a placa do carro.
     * @returns {string} A placa do carro.
     */
    get placa() {
        return this.#placa;
    }
}
