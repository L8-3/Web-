function num(str) {
  var a = {};
  var b = str.split("");
  // key为元素   值为个数
  for (let i = 0; i < b.length; i++) {
    if (a[b[i]]) {
      a[b[i]]++;
    } else {
      a[b[i]] = 1;
    }
  }
  // 通过比较找出最大的
  var maxLetter = "";
  var levelNum = 0;
  for (const k in a) {
    if (a[k] > levelNum) {
      levelNum = a[k];
      maxLetter = k;
    }
  }

  console.log(maxLetter + ":" + levelNum);

  return maxLetter;
}
var cc = "dafsfsfasfafaqertyyuuioll,mmnnbvvsfsdfqgsafsafgff";
num(cc);
