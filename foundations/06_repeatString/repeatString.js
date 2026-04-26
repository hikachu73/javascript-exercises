const repeatString = function(word,num) {
    let newWord = '';
    if(num<0){
        newWord = "ERROR";
    }
    for(let i=1;i<=num;i++){
         newWord = newWord + word;
    }
    return newWord;
};
repeatString("hey",10);
repeatString("hey",10);
repeatString("hi",1);
repeatString("bye",0);
repeatString("",10);
repeatString("hey",-1);
// Do not edit below this line
module.exports = repeatString;
