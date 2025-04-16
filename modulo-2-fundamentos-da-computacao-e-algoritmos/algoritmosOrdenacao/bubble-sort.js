export default function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca os elementos
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Exemplo de uso:
const arrayBubble = [5, 1, 4, 2, 8];
console.log('Bubble Sort:', bubbleSort(arrayBubble)); // Saída: [1, 2, 4, 5, 8]
