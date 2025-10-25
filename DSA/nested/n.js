let n = 5;
for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    if (
      i == 0 ||
      i == n - 1 ||
      j == 0 ||
      j == n - 1 ||
      j == i ||
      j == n - i - 1
    ) {
      str += "*";
    } else {
      str += "_";
    }
  }

  console.log(str);
}


function target(arr) {
  let T = 9;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
      let index = [i, j];
      if (arr[i] + arr[j] == T) {
        return index;
      }
    }
  }
}
console.log(target([4, 5, 6, 2, 9]));

