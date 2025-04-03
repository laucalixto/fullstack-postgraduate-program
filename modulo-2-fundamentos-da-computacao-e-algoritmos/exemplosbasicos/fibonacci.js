function fibonacciIteractive(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) {
        fibN = fibNMinus1 + fibNMinus2;
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}

console.log('fibonacciIteractive', fibonacciIteractive(10));

function fibonacci(n = 0) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('fibonacci', fibonacci(10));

function fibonacciMemoization(num) {
    const memo = [0, 1];
    const fibonacci = (num) => {
        if (memo[num] != null) return memo[num];
        return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
    };
    return fibonacci(num);
}

console.log('fibonacciMemoization', fibonacciMemoization(10));
