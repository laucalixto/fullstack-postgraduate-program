const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Pedido atendido'), 2000);
});

promise
    .then((result) => {
        console.log(result);
        return 'valor';
    })
    .then((result) => console.log('Retorno do valor na cadeia inicial,', result))
    .catch((error) => console.log(error));

console.log('fim do programa');
