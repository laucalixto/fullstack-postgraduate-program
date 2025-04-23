import { defaultCompare, Compare, swap } from './utilities/util.js';

export default function selectionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
            if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            swap(array, i, indexMin);
        }
    }
    return array;
}

// Exemplo de uso:
const arraySelection = [5, 1, 4, 2, 8];
console.log('Selection Sort:', selectionSort(arraySelection)); // Saída: [1, 2, 4, 5, 8]
