

let arr = [1,4, 3, 5];
let n = arr.length+1;
let b = n*(n + 1) / 2;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let  c = b - sum;
console.log(c);
