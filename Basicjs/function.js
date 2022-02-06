var inches = 132;
var feet = inches / 32;
console.log(feet);

function inchToFeet(inch){
  var feet = inch / 12;
  return feet;
}
var MyInch = inchToFeet(100);
console.log('this is the feet:', MyInch);

// program to print a text
// declaring a function
function greet() {
  console.log("Hello there!");
}

// calling the function
greet();

function add(num1, num2){
  let num = num1 + num2;
  console.log(num);
  // return num;
}

add(2, 3);

function sub(a, b){
  let x= a-b;
  return x;

}

let result = sub(6, 3);
console.log(result);
