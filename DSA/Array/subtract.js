

let arr = [20, 20, 20, 20];
let d = [];
d[0] = arr[0];
for(let i = 1; i < arr.length; i++){
    d[i] = arr[i]- arr[i-1];
}
function subtract(d, s, e, v){
    d[s] += v;
    if(e+1 < arr.length){
        d[e+1] -= v;
    }
}
subtract(d, 1, 2, 5);

let b = [];
b[0] = d[0];
for(let j = 1; j < arr.length; j++){
    b[j] = b[j-1] - d[j];
}
console.log(b);