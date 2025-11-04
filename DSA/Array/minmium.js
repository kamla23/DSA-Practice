
//======================with loop================================================//

// let n = 52845;
// let arr = [2000, 500, 200, 100, 20, 1];
// let count = 0;
// let notes = 0;
// let r = 0;
// for(let i = 0; i < arr.length; i++){
//     count = Math.floor(n/arr[i]);
//     if(count > 0){
//        console.log(arr[i],count);
//     }
//     notes += count;
//     n = n % arr[i];
// }
// console.log(notes)


//============================with conditions only==========================//

let n = 52845;
let notes = 0;

if (n >= 2000) {
  let count = Math.floor(n / 2000);
  console.log(count);
  notes += count;
  n = n % 2000;
}

if (n >= 500) {
  let count = Math.floor(n / 500);
  console.log(count);
  notes += count;
  n = n % 500;
}
if (n >= 200) {
  let count = Math.floor(n / 200);
  console.log(count);
  notes += count;
  n = n % 200;
}

if (n >= 100) {
  let count = Math.floor(n / 100);
  console.log(count);
  notes += count;
  n = n % 100;
}

if (n >= 50) {
  let count = Math.floor(n / 50);
  console.log(count);
  notes += count;
  n = n % 50;
}
if (n >= 20) {
  let count = Math.floor(n / 20);
  console.log(count);
  notes += count;
  n = n % 20;
}

if (n >= 1) {
  let count = Math.floor(n / 1);
  console.log(count);
  notes += count;
  n = n % 1;
}
console.log(notes);