
function target(arr, aim) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let s = arr[start] + arr[end];
    if (s === aim) {
      console.log(arr[start], arr[end]);
      return true;
    } else if (s < aim) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
console.log(target([1, 2, 4, 5, 6, 8], 11));
