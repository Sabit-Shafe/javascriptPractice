//function largest element of array
function largestElement(numbers) {
    let largest = numbers[0];//obosshoi let hote hobe constant update kora jay na
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;      
        }
    }
    return largest;
}

let ages = largestElement([12, 33, 13, 19, 70, 45, 80, 93]);
console.log('oldest age', ages);

// fastest way largest element in array usnig math function 
Array.max = function( array ){
    return Math.max.apply( Math, array );
};


// function using smallest element of array
function smallesElement(numbers1) {
    let smallest = numbers1[0];
    for (let i = 0; i < numbers1.length; i++) {
        const element = numbers1[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
let smAges = smallesElement([12, 13, 45, 2, 123, 49, 93])
console.log('smallest age ', smAges);

// another method 

// fastest way of function using math function 
Array.min = function( array ){
    return Math.min.apply( Math, array );
};
let minimum = Array.min([2, 1, 3, 67, 55, 43])
console.log(minimum);