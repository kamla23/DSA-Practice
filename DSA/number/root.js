function findRoot(n, m) {
  for (let i = 1; i <= m; i++) {
    if (i ** n === m) {
     return i;
    } 
  }
  return -1;
}
console.log(findRoot(3, 27));
console.log(findRoot(3, 9));
console.log(findRoot(4, 625));


