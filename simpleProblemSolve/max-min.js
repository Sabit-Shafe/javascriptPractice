// bangla system maximum number compare 3
// const business = 460;
// const minister = 455;
// const army = 550;
// if (business > minister && business>army) {
//     console.log('business is bigger');
// }
// else if (minister> business && minister>army) {
//     console.log('minister is bigger');
// }
// else{
//     console.log('army is bigger');
// }

// maximum number using math.max 
// var max = Math.max(business, minister, army);
// console.log(max);

// largest number using function

// function findLargest(business, minister, army){
//     if (business > minister && business>army) {
//         return business;
//     }
//     else if (minister> business && minister>army) {
//         return minister;
//     }
//     else{
//         return army;
//     }
// }

// const largest = findLargest(456, 342, 29977);
// console.log('largest is:', largest);

// find smallest number usnig function
function findSmall(bussiness, minister, army) {
    if (bussiness<minister && bussiness<army) {
        return bussiness;
    }
    else if (minister<bussiness && minister<army) {
        return minister;
    }
    else{
        return army;
    }
}
const smallest = findSmall(120, 234, 112);
console.log('smalllest is:', smallest);