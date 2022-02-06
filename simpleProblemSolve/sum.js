// using array show element and index and sum the all element of array

// const number = [33, 45, 34, 22, 334, 55667, 2233];
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     // console.log(element);
//     // console.log(i);
//     sum = sum + element;

// }
// console.log(sum);

// usnig function total sum of array 

function arraySum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
        // return sum;
    }
    return sum;
}
let sumArray = arraySum([2, 3, 1]);
console.log('array is ', sumArray);
