
function SubArray(arr) {
  let max = arr[0];
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    c += arr[i];

    if (c > max) {
      max = c;
    }

    if (c < 0) {
      c = 0;
    }
  }
  return max;
}
console.log(SubArray([-5, -1, -2, -7, -3, -4]));
console.log(SubArray([3, -2, 5, -1, 6, -3, 2, 7, -5, 2]));
console.log(SubArray([10]));
console.log(SubArray([-10]));
console.log(SubArray([0, 0, 0, -1, 0, 0]));
console.log(SubArray([2, 3, -2, 4, -1, 2]));
console.log(SubArray([-1, -2, -3, -4, -5]));
console.log(SubArray([-2, -3, 4, -1, -2, 1, 5, -3]));
