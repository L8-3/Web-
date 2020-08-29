const readline = require("readline-sync");
var n = readline.question("请输入一个数：");
var result = Math.cbrt(n).toFixed(2);
console.log(result);
