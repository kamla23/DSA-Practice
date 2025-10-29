
let arr = [0,0,0,0,0];

let d = [];
d[0] = arr[0];
for(let i = 1; i < arr.length; i++){
    d[i] = arr[i] - arr[i-1];
}
function levelUpdate(d, s, e, v){
    d[s] += v;
    if(e+1 < d.length){
        d[e+1] -= v;
    }
}
levelUpdate(d, 1-1, 3-1, 4);
levelUpdate(d, 2-1, 5-1, 2);
levelUpdate(d, 4-1, 5-1, -1);


let a = [];
a[0] = d[0];
for(let j = 1; j < d.length; j++){
    a[j] = a[j-1] + d[j];
}
console.log(a);