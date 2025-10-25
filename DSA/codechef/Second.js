// let N = 5;
// let c = 3;
// let A = [10, 9, 8, 7, 6];
// let count = 0;

// for(let i = 0; i < A.length; i++){
//     if(A[i] < c && A[i] != c){

//     }else{
//          c++;
//         count++;
//     }
// }
// console.log(count);

function alice(N, C, A) {
  let count = 0;
  while (true) {
    let newcount = C + count;
    let less = false;
    let equal = false;

    for (let i = 0; i < N; i++) {
      if (A[i] < newcount) {
        less = true;
      }
      if (A[i] == newcount) {
        equal = true;
      }
    }
    if (less && !equal) {
      return count;
    }
    count++;
  }
}
console.log(alice(5, 3,[10,9,8,7,6 ]));

