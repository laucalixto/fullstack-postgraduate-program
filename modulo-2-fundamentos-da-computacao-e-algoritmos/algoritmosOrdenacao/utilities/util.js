export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
};

export function defaultEquals(a, b) {
    return a === b;
}

export function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */ // modo clássico, tipicamente semelhante a outras linguagens
    [array[a], array[b]] = [array[b], array[a]]; // modo ES2015
}
