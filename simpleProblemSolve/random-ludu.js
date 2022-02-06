// random ludu number print using function
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const random = getRandomNumber(1,6);
console.log(random);