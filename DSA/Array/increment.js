
let arr = [0,0,0,0,0,0,0,0,0,0];
let d = [];
d[0] = arr[0];

for(let i = 1; i < arr.length; i++){
    d[i] = arr[i]-arr[i-1];
}

function increment(d, s, e, v){
    d[s] += v;
    if(e+1 < arr.length){
        d[e+1] -= v;
    }
}
increment(d, 0, 5, 10);
let a = [];
a[0] = d[0];
for(let j = 1; j < arr.length; j++){
    a[j] = a[j-1] + d[j]
}
console.log(a); 