

let  arr = [0,0,0,0,0];
let diff = [];

diff[0] = arr[0];
for(let i = 1; i < arr.length; i++){
    diff[i] = arr[i]- arr[i-1];
}
console.log(diff);
let s = 2;
let e = 4;
let v = 5;

diff[s] += v;

if(e+1 < arr.length){
    diff[e+1] -= v;
}
console.log(diff);

let arr1 = [];

arr1[0] = diff[0];

for(let i = 1; i < diff.length; i++){
    arr1[i] = arr1[i-1] + diff[i];
}
console.log(arr1);