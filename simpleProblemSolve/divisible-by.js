function countNumberDivisByThree(number) {
    let count = 0;
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0) {
            sum = sum +i;
            count = count + 1;
        }     
    }
    let average = sum / count; 
    return average;
}

let result = countNumberDivisByThree(100);
console.log(result);