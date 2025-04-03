function fatorialRecursivo(num) {
    if (num > 0) {
        if (num === 1 || num === 0) {
            console.log(num);
            return 1;
        }
        console.log(num);

        return num * fatorialRecursivo(num - 1);
    }
    return undefined;
}

console.log(fatorialRecursivo(-15));
