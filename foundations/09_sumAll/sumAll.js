const sumAll = function(lower,higher) {
    if(lower>higher){
        let temp = lower;
        lower=higher;
        higher=temp;
    }
    if((lower<0 || higher<0)||(!Number.isInteger(lower)||!Number.isInteger(higher))){
        return "ERROR";
    }
    let array=[];
    for(let i = lower; i<=higher; i++){
        array.push(i);
    }
    return array.reduce((total,value)=>total+value,0);
};
sumAll(2,4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
