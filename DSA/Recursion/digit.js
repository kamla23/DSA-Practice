function digits(n) {
  if (n === 0) {
    return 0;
  }

  let count = 1 + digits(Math.floor(n / 10));
  return count;
}
console.log(digits(12345));
