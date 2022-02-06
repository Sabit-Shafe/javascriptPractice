
/*
fibonakkki series shutro 
nth = (n-1)th + (n-2)th
        or  
ith = (i-1)th + (i-2)th 

*/
// fibonakki normal way 
let fibo = [0, 1]
for (let i = 2; i <= 12; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

// function way fiboncci 

function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'plaese give a number';        
    }
    if (num <2) {       
        return 'Please enter e positive number greater then 1'
    }
    let fibo = [0, 1]
    for (let i = 2; i <= 12; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;

}

let fiboNum = fibonacciSeries(-5);
console.log('fibonacci series :', fiboNum);

