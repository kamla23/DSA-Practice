let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

let left = 0;
let right = 0;

let n = arr.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === j) {
      left += arr[i][j];
    }

    if (i + j === n - 1) {
      right += arr[i][j];
    }
  }


}
 let diff = Math.abs(left - right);

console.log("left:", left);
console.log("right:", right);
console.log(diff);
