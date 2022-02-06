// let factorial = 1;
// for (let i = 4 ; i >=1; i--) {
//     factorial = factorial *i;
    
// }

// console.log(factorial);
// recursion style 
function factorial(fact) {
    if (fact == 1) {
        return 1;
    }
    return fact * factorial(-- fact) ;
}

console.log(factorial(4));