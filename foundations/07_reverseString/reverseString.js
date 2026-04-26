const reverseString = function(string) {
    let word = '';
    for(let i=string.length-1; i>=0; i--){
        word=word + string.charAt(i);
    }
    return word;
};
reverseString(`hello`);
reverseString(`hello there`);
reverseString('123! abc! Hello, Odinite.');
reverseString('');

// Do not edit below this line
module.exports = reverseString;
