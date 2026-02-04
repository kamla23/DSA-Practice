

let arr = [0, 0, 1, 1, 1, 0, 1];
let c = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    c++;
    console.log(c);
  }
}
console.log(c); 
