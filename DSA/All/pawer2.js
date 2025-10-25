function pawerTwo(a) {
  let c = 0;
  while(a > 1) {
    if (a % 2 == 0) {
      c++;
      a = Math.floor(a/10);
    }
  } 
   if (c**2 == a) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(pawerTwo(16));
console.log(pawerTwo(26));
console.log(pawerTwo(1024));
console.log(pawerTwo(0));
console.log(pawerTwo(999));
console.log(pawerTwo(1073741824));
console.log(pawerTwo(2147483647));
console.log(pawerTwo(512));
console.log(pawerTwo(2));
console.log(pawerTwo(3)); 