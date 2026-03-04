
let arr = [4, 1, 3, 5, 7, 6];
let n = arr.length+1;
// console.log(n);
let x = 0;
for (let i = 1; i <= n; i++) {
  x ^=i;
}
// console.log(x);
let b = 0;
for(let j = 0; j < arr.length; j++){
    b ^=arr[j];
}
// console.log(b);
let r = x^b;
console.log(r);