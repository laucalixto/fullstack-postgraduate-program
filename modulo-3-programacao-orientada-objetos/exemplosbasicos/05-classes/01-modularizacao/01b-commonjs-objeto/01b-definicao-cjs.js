/**
 * @file /home/laucalixto/dev/pos/fullstack-postgraduate-program/modulo-3-programacao-orientada-objetos/exemplosbasicos/05-classes/01-modularizacao/01b-commonjs-objeto/01b-definicao-cjs.js
 * @brief Define a classe `Circulo` e a exporta usando o padrão CommonJS (`module.exports`).
 */

/**
 * Representa um círculo com um raio e métodos para calcular área e circunferência.
 */
class Circulo {
    /**
     * Cria uma instância de Circulo.
     * @param {number} r - O raio do círculo.
     */
    constructor(r) {
        this.raio = r;
    }
    /**
     * Calcula a área do círculo.
     * @returns {number} A área do círculo.
     */
    area() {
        return Math.PI * this.raio ** 2;
    }
    /**
     * Calcula a circunferência do círculo.
     * @returns {number} A circunferência do círculo.
     */
    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
}

// Exporta a classe 'Circulo' como o valor principal do módulo.
module.exports = Circulo;
