import { Compare, defaultCompare } from './utilities/util.js';

export default function insertionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let temp;
    console.log('temp:', temp);
    for (let i = 1; i < length; i++) {
        let j = i;
        console.log('j:', j);
        temp = array[i];
        console.log('temp:', temp);
        while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
        console.log('array:', array);
        console.log('array[j]:', array[j]);
    }
    return array;
}

// Exemplo de uso:
const arrayInsertion = [5, 2, 4, 1, 8];
console.log('Insertion Sort:', insertionSort(arrayInsertion)); // Saída: [1, 2, 4, 5, 8]
