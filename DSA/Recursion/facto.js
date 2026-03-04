function factorial(n){
    if(n === 0){
return 1;
    }

    let fac =  n*factorial(n-1);
    return fac;
}
console.log(factorial(3))