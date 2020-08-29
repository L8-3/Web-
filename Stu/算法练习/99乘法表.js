for(i=1;i<=9;i++){
	var a=" ";
    for(j=1;j<=i;j++){
    	a+=i+"*"+j+"="+i*j+(i*j<10?"   ":"  ");
    }
    console.log(a);
}
console.log("*****************************************")
for(m=9;m>=1;m--){
	var b=" ";
    for(n=1;n<=m;n++){
    //for(n=m;n>=1;n--){
    	b+=m+"*"+n+"="+m*n+(m*n<10?"   ":"  ");
    }
    console.log(b);
}