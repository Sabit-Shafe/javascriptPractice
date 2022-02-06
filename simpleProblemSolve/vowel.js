const vowel = ['a', 'e', 'i', 'o', 'u', 'O', 'U', 'A', 'I', 'U', 'E'];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value) {
        if (vowel.includes(value)) {
            count ++;
        }
    });
    return count;
}
console.log(countVowels("shafe the great"));