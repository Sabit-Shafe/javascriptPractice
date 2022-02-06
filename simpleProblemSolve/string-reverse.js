// string ke reverse kora using function
function reverseString(text) {
    let reverse = "";
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString('hello, how are you?');
console.log('reverse string of the text is:', reversed);