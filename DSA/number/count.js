

function countNum(n) {
  let c = 0;
  let l = Math.floor(Math.cbrt(n));
  for (let a = 1; a <= l; a++) {
    for (let b = 1; b <= l; b++) {
      if (a ** 3 + b ** 3 == n) {
        c++;
      }
    }
  }

  return c;
}
console.log(countNum(9));
console.log(countNum(28));
console.log(countNum(1729));