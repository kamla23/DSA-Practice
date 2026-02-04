let arr = [1, 4, 3, 5];
let n = arr.length;
let b = n*(n + 1) / 2;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += arr[i];
}
let  c = sum - b;
console.log(c);
