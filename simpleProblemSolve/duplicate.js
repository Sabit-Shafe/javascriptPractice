// remove duplicate name using function 
const names = ['shafe', 'afzal', 'tania', 'arif', 'rishad', 'tomal', 'afzal', 'shafe', 'tania'];
function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log('unique name is :', uniqueNames);

// remove duplicate numbers using function 

function removeDupliNum(numbers) {
    const unique = [];
    for (const element of numbers) {
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNumbers = removeDupliNum([12, 23, 11, 223, 12, 22, 343, 11, 23]);
console.log('unique number is:', uniqueNumbers);

//select duplicate number
const numbers = [1, 2, 1, 2, 3, 4, 5, 31,12]
const Duplicate = 
    numbers.filter(function(value, index, array) {
        return array.indexOf(value) != index;// fot unique number === hobe
    });

console.log(Duplicate);