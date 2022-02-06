const phones = [
    {name: 'samsung s7', price: 45000, camera: '10mp', storage: '32gb'},
    {name: 'xiome note5', price: 25000, camera: '8mp', storage: '28gb'},
    {name: 'oppo o8', price: 18000, camera: '8mp', storage: '16gb'},
    {name: 'walton w7', price: 15000, camera: '8mp', storage: '8gb'},
    {name: 'nokia 4', price: 8000, camera: '6mp', storage: '4gb'},
    {name: 'iphone 12', price: 95000, camera: '32mp', storage: '64gb'}
];


function compare(a, b) {
    if (a.toString() === b) {
        return true;    
    }
    else{
        return false;
    }
}

const result = compare(25, 25);
console.log(result);
console.log("123" + 123)

let a ="hi"
let b ="there"
console.log(a+b);

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i =1; i < array.length; i++){
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}