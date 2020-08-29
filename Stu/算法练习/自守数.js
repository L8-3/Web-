const readline = require("readline-sync");
var n = readline.question("请输入n：");
function getX(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    var xx = i * i + "";
    if (xx.endsWith(i)) {
      sum++;
      console.log(i);
    }
  }
  console.log(n + "以内自守数的个数为：" + sum);
}
getX(n);
