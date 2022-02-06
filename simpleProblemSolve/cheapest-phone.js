// cheapest phone or select a object item whole of object array using function 

function cheapestPhones(phones) {
    let cheapest = phones[0];
    for (const phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest; 
}

const phones = [
    {name: 'samsung', price: 45000, camera: '10mp', storage: '32gb'},
    {name: 'xiome', price: 25000, camera: '8mp', storage: '28gb'},
    {name: 'oppo', price: 18000, camera: '8mp', storage: '16gb'},
    {name: 'walton', price: 15000, camera: '8mp', storage: '8gb'},
    {name: 'nokia', price: 8000, camera: '6mp', storage: '4gb'},
    {name: 'iphone', price: 95000, camera: '32mp', storage: '64gb'}
];

let cheapestPhoneOption = cheapestPhones(phones);
console.log('cheapest phone is :', cheapestPhoneOption);

// for expensive 

function expensivePhones(phones) {
    let expensive = phones[0];
    for (const phone of phones) {
        if (phone.price > expensive.price) {
            expensive = phone;
        }
    }
    return expensive;
}

let expensivePhoneOption = expensivePhones(phones);
console.log('expensive phone is :', expensivePhoneOption);