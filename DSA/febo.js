
function feb(a, b, n) {
  if (n === 0) {
    return 0;
  }
  console.log(a);
  let c = a + b;
  feb(b , c, n - 1);
 
}
feb(0, 1, 6);
