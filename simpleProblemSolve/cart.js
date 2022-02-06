// total cart price using function 
function cartTotalPrice(cart) {
    let cartTotal = 0;
    for (const product of cart) {
        const productTotal = product.price * product.quantity;
        cartTotal = cartTotal + productTotal ;

    }
    return cartTotal, totalQuantity;
}

let cart1 = [
    {name: 'laptop', price: 65000, quantity: 1},
    {name: 'shirt', price: 700, quantity: 4},
    {name: 'pant', price: 1300, quantity: 2},
    {name: 'watch', price: 2000, quantity: 2},
    {name: 'phone', price: 48000, quantity: 1}

];
let cart2 = [
    {name: 'laptop', price: 95000, quantity: 1},
    {name: 'shirt', price: 700, quantity: 4},
    {name: 'pant', price: 1300, quantity: 5},
    {name: 'watch', price: 3000, quantity: 2},
    {name: 'phone', price: 80000, quantity: 1}

];
let cart3 = [
    {name: 'laptop', price: 50000, quantity: 1},
    {name: 'shirt', price: 900, quantity: 2},
    {name: 'pant', price: 1300, quantity: 2},
    {name: 'watch', price: 12000, quantity: 2},
    {name: 'phone', price: 8000, quantity: 1}

];

const TotalPrice = cartTotalPrice(cart3);
console.log('total cart price is :', TotalPrice);