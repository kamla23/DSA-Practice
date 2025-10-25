
let arr = [0,0,0,0,0];

let diff = [];
    diff[0] = arr[0];
for(let i = 1; i < arr.length; i++){
    diff[i] = arr[i] - arr[i-1]
}
console.log(diff);

function diffArray( diff, s, e, v){
        diff[s] += v;
        if(e+1 < diff.length){
            diff[e+1] -= v
            
        }
}
diffArray(diff,1, 3, 5);
diffArray(diff,2,4,2);
console.log(diff);

let arr1 = [];
arr1[0] = diff[0];
for(let j = 1; j < arr.length; j++){
    arr1[j] = arr1[j-1] + diff[j];
}

console.log(arr1);