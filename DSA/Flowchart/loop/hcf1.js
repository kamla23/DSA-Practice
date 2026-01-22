
function highest(a, b){
let hcf = 1;
let n;
if(a < b){
    n = a;
}else{
    n = b;
}

for(let i = 1; i <= n; i++){
    if(a%i === 0 && b%i === 0){
        hcf = i;
    }
}
return hcf;
}
console.log(highest(12, 18));