

let arr = [-2, 0, 3, -5, 2, -1];
let arr1 = [];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    arr1.push(sum);
}
console.log(arr1);

function findsum(r, m){
    let a = 0;
    let b = 0;
    let rang = 0;
for(let j = 0; j < arr1.length; j++){
    if(j == r){
        a += arr1[j];
        console.log(a);
    }
    if(j == m){
        b += arr1[j];
        console.log(b);
    }
    rang = a+b;
}
 return rang;
}
console.log(findsum(2,3));
console.log(findsum(2,5));



