var num = [];
var j = 0;
for(var i = 100; i < 400000000; i ++){
var iG, iS, iB;
iG = i % 10;
iS = parseInt(i / 10) % 10;
iB = parseInt(i / 100);
var sum = iG*iG*iG + iS*iS*iS + iB*iB*iB;
if(i == sum){
num[j] = i;
j ++;
}
}
document.write("水仙花数都有：" + "<br />");
for(var i = 0; i < num.length; i ++){
document.write(num[i] + "<br />");
}