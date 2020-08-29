function f(num1, num2){
    for(i = Math.min(num1, num2); i > 0; i--){
    if(num1%i == 0 && num2%i == 0)
    return i;
    }
    }
    alert(f(12, 8))