/**
 * @file locadora.js
 * @brief Define a classe `Locadora` para gerenciar uma frota de carros.
 */

export class Locadora {
    /**
     * @private Array para armazenar os carros da locadora.
     * Espera-se que contenha instâncias de `Carro` ou subclasses como `CarroComPlaca`.
     * @type {import('./carro-com-placa.js').CarroComPlaca[]}
     */
    #carros;

    /**
     * Cria uma nova instância de Locadora, inicializando a frota de carros vazia.
     */
    constructor() {
        this.#carros = [];
    }

    /**
     * Adiciona um carro à frota da locadora.
     * @param {import('./carro-com-placa.js').CarroComPlaca} carro - O objeto carro a ser adicionado.
     */
    adicionaCarro(carro) {
        this.#carros.push(carro);
        console.log(`Carro com placa ${carro.placa} adicionado. Total: ${this.#carros.length}`);
    }
    /**
     * Exibe no console o estado atual (placa e tanque) de todos os carros na frota.
     */
    consultaCarros() {
        console.log('\n--- Frota da Locadora ---');
        this.#carros.forEach((carro) => {
            console.log(`Carro placa (${carro.placa}); tanque:${carro.tanque}`);
        });
        console.log('-------------------------\n');
    }
    /**
     * Abastece um carro específico na frota, identificado pelo seu índice no array.
     * @param {number} index - O índice do carro na frota a ser abastecido.
     * @param {number} quantidade - A quantidade de combustível a ser adicionada.
     */
    abastecerCarro(index, quantidade) {
        if (index >= 0 && index < this.#carros.length) {
            this.#carros[index].abastecer(quantidade);
        }
    }
}
