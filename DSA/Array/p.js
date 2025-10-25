
let arr = [-2, 0, 3, -5, 2, -1];
let arr1 = [];
let sum = 0;
let a = 0;
let b = 0;
let rang = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    arr1.push(sum);

    if(i == 2){
        a += arr1[i];
        console.log(a);
    }
    if(i == 5){
        b += arr1[i];
        console.log(b);
    }
    rang = a+b;
}
console.log(rang);
console.log(arr1);