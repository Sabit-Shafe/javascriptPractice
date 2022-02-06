// write a function to calculate total price based on given quantity + handle errors

function TotalPrice(quantity) {
    if(typeof quantity !== "number"){
        return "please enter e valid quantity";
    }
    if (quantity <=0) {
        return 'please enter a valid quantity';
    }
    let price = 0;
    if (quantity <= 2) {
        price = quantity * 30;
    }else{
        price = quantity * 25;
    }
    return price;
}

console.log(TotalPrice("sdf"));
