const reverseString = function(string) {
    let reversedString = '';
    for(let i=string.length-1; i>=0; i--){
        reversedString = reversedString + string.charAt(i);
    }
    return reversedString;
};
reverseString(`hello`);
reverseString(`hello there`);
reverseString('123! abc! Hello, Odinite.');
reverseString('');

// Do not edit below this line
module.exports = reverseString;
