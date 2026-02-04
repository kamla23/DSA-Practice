
let n = 7;
let a = 0;
let b = 1;
let c = 0;
while(n > 0){
    console.log(c); 
    c = a+b;
    a = b;
    b = c;
    n--;
}