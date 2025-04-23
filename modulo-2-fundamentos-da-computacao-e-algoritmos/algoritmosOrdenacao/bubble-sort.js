import { defaultCompare, Compare } from './utilities/util.js';

export default function bubbleSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let swapped;
    for (let i = 0; i < length; i++) {
        swapped = false; // Reseta a flag de troca para cada passagem
        for (let j = 0; j < length - 1 - i; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
                swapped = true; // Indica que ocorreu uma troca nesta passagem
            }
        }
        // Se nenhuma troca ocorreu nesta passagem, o array está ordenado
        if (!swapped) {
            break;
        }
    }
    return array;
}

function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */ // modo clássico, tipicamente semelhante a outras linguagens
    [array[a], array[b]] = [array[b], array[a]]; // modo ES2015
}

// Exemplo de uso:
const arrayBubble = [5, 1, 4, 2, 8];
console.log('Bubble Sort:', bubbleSort(arrayBubble)); // Saída: [1, 2, 4, 5, 8]
