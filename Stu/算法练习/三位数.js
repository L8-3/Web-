var count =0;//计数
for(var i=1;i<=4;i++){
	for(var j=1;j<=4;j++){
		for(var k=1;k<=4;k++){
			if(i!==k&&i!==j&&j!==k){
			 count++
	    	console.log(i,j,k);	
			}
		}
	}
}
console.log(count);