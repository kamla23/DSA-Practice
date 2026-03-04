// function sum(n) {
//   if (n === 0) {
//     return 0;
//   }
//   let add = n + sum(n - 1);
//   return add;
// }
// console.log(sum(5));

function sumArray(arr, n) {
  if (n === 0) {
    return 0;
  }
  let sum = arr[n - 1] + sumArray(arr, n - 1);
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5], 5));
