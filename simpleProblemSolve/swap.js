let first = 5;
let second = 7;
console.log(first, second);

// 1st approach for swaping 
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// 2nd approach destructuring 

[first, second] = [second, first];
console.log(first, second);