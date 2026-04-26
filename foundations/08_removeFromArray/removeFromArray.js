const removeFromArray = function(array,...remove) {
    for(let i=0;i<array.length;i++){
        for(let j=0;j<remove.length;j++){
            if(array[i] === remove[j]){
                array.splice(i,1);
                i--;
            }
        }
    }
    return array;
};
removeFromArray([1,2,3,4],3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
