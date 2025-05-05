/**
 * @file consumidor.js
 * @brief Simula um consumidor interagindo com uma locadora de veículos.
 * Demonstra a criação de uma `Locadora`, adição de `CarroComPlaca`
 * e o uso dos métodos da locadora para consultar e abastecer carros.
 */

import { Locadora } from './locadora.js';
import { CarroComPlaca } from './carro-com-placa.js';

// Cria uma instância da Locadora
let locadora = new Locadora();

// Adiciona dois carros à locadora
locadora.adicionaCarro(new CarroComPlaca('ABC-9I23'));
locadora.adicionaCarro(new CarroComPlaca('DEF-0U74'));

// Consulta o estado inicial dos carros
locadora.consultaCarros();

// Abastece o primeiro carro (índice 0) com 30 unidades
locadora.abastecerCarro(0, 30);
locadora.consultaCarros();

// Abastece o segundo carro (índice 1) com 30 unidades
locadora.abastecerCarro(1, 30);
// Tenta abastecer o primeiro carro com mais 30 (ele já tem 30, capacidade 55)
locadora.abastecerCarro(0, 30);
// Consulta o estado final dos carros
locadora.consultaCarros();
