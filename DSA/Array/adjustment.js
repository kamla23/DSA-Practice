

let arr = [100, 100, 100, 100, 100, 100];
let d = [];
    d[0] = arr[0];
for(let i = 1; i < arr.length; i++){
    d[i] = arr[i]-arr[i-1];
}

function balanceAdjustment(d, s, e, v){
    d[s] += v;
    if(e+1 < d.length){
        d[e+1] -= v;
    }
}
balanceAdjustment(d, 1-1,3-1, +20);
balanceAdjustment(d, 4-1,6-1, -10);
balanceAdjustment(d, 2-1,5-1, +5);

let a = [];rs
a[0] = d[0];
for(let j = 1; j < d.length; j++){
    a[j] = a[j-1] + d[j];
}
console.log(a);