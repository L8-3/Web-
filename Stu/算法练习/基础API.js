var numberArray = [3,6,2,4,1,5];
numberArray.reverse();  //5,1,4,2,6,3
numberArray.sort(function(a,b){  //6,5,4,3,2,1
    return b - a;
})
