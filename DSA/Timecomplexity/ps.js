

// function prefix(A, i) {
//     let sum = 0;
//     for (let j = 0; j < i; j++) {
//         sum += A[j]
//     }
//     return sum;
// }

// function suffix(A, i) {
//     let sum = 0;
//     for (let j = i; j < A.length; j++) {
//         sum += A[j]
//     }
//     return sum;
// }

// function findmin(A, N) {
//     let min = Infinity;
//     let minind = -1;

//     for (let i = 0; i < N; i++) {
//       let p = prefix(A, i + 1);
//       let s = suffix(A, i);

//         let t = p + s;
//         if (t < min) {
//             min = t;
//             minind = i+1;
//         }
//     }
//     return minind;
// }
// console.log(findmin([1,2,3], 3));
// console.log(findmin([2,1,3,1], 4));


//=======================================================//

function findmin(N, A){
   let min = Infinity;
    let minind = -1;
    for(let i = 0; i < N; i++){
        if(A[i] < min){
            min = A[i];
            minind = i+1;
        }
    }
    return minind;
}
console.log(findmin(3,[1,2,3]));
console.log(findmin(4,[2,1,3,1]));