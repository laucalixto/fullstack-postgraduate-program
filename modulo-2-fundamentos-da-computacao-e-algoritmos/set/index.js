var mySet = new Set();

mySet.add(0);
console.log(mySet);
console.log('-=-=-=-=-=-=-');

mySet.add(1);
console.log(mySet);
console.log('-=-=-=-=-=-=-');

mySet.add(1);
console.log(mySet);
console.log('-=-=-=-=-=-=-');

mySet.add(2);
console.log(mySet);
console.log('-=-=-=-=-=-=-');

mySet.add(3);
console.log(mySet);
console.log('-=-=-=-=-=-=-');

mySet.add(2);
console.log(mySet);
console.log('-=-=-=-=-=-=-');

const vectorNumbers = [2, 2, 1, 1, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 7, 8, 9, 9];
let vectorNumbersFilter = new Set(vectorNumbers);

console.log('vectorNumbers', vectorNumbers);
console.log('vectorNumbersFilter', vectorNumbersFilter);
