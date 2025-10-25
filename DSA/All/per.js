
// let n = 100000
// for (let i = 1; i <= n; i++) {
//   sum = 0;
//   for (let j = 1; j < i; j++) {
//     if (i % j == 0) {
//       sum += j;
//     }
//   }
//   if (sum == i) { 
//       console.log(i);
//   }
// } 


let arr = [1,2,3,4];
let sub = [];
for(let i = 0; i < arr.length; i++){
  for(let j = i; j < arr.length; j++){
     sub.push(arr.slice(i, j+1));
    console.log(sub);
  } 
}






