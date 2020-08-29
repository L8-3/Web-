const readline = require("readline-sync");
var n = readline.question("Please input a number: ");
var num = "";
var sum = 0;
for(var i=1;i<=n;i++){
	var result = 1;
    for(var j=1;j<=i;j++){
    	result *= j;
    }
    sum += result;
    if(i<n){
    	num += i+"!+";
    }else{
    num += i+"!=";
	}
}
console.log(num,sum);